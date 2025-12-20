import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data/services';
import ContactForm from '../components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
    const { id } = useParams();
    const service = servicesData.find((s) => s.id === parseInt(id));
    const heroRef = useRef(null);
    const featuresRef = useRef([]);
    const formRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hero animation
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl.from('.service-title', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
        });
        heroTl.from(
            '.service-image',
            {
                scale: 1.2,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
            },
            '-=0.7'
        );

        // Content animation
        gsap.from('.service-description', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.service-description',
                start: 'top 80%',
            },
        });

        // Features animation
        featuresRef.current.forEach((feature, index) => {
            gsap.from(feature, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: feature,
                    start: 'top 85%',
                },
            });
        });

        // Form animation
        gsap.from(formRef.current, {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: formRef.current,
                start: 'top 80%',
            },
        });
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-dark mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-primary hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-dark/60">
                            <Link to="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-primary transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-primary">{service.title}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="service-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-dark/70 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="service-image relative rounded-3xl overflow-hidden aspect-square">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="service-description bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About This <span className="text-primary">Service</span>
                        </h2>
                        <p className="text-lg text-dark/70 leading-relaxed mb-8">
                            {service.fullDescription}
                        </p>

                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                            <p className="text-dark/70 leading-relaxed">
                                💡 <strong className="text-primary">Personalized Approach:</strong> Every
                                individual is unique, and so are their needs. We work closely with you to
                                create a customized support plan that aligns with your NDIS goals and personal
                                preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-12 text-center">
                        What's <span className="text-primary">Included</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, index) => (
                            <div
                                key={index}
                                ref={(el) => (featuresRef.current[index] = el)}
                                className="group bg-light/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <svg
                                            className="w-6 h-6 text-primary group-hover:text-light transition-colors duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-light text-lg font-semibold">{feature}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-light mb-4">
                            NDIS Funded Service
                        </h3>
                        <p className="text-light/70 leading-relaxed max-w-2xl mx-auto">
                            This service can be funded through your NDIS plan. We'll work with you to
                            ensure all supports align with your plan goals and budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* Book Appointment Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div ref={formRef} className="bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Book an <span className="text-primary">Appointment</span>
                            </h2>
                            <p className="text-dark/60 text-lg">
                                Ready to get started? Fill out the form below and we'll be in touch within 24 hours.
                            </p>
                        </div>

                        <ContactForm showServiceSelect={false} />
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-12 text-center">
                        Other <span className="text-primary">Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicesData
                            .filter((s) => s.id !== service.id)
                            .slice(0, 3)
                            .map((relatedService) => (
                                <Link
                                    key={relatedService.id}
                                    to={`/services/${relatedService.id}`}
                                    className="group block bg-light/5 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${relatedService.image})` }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
                                            {relatedService.title}
                                        </h3>
                                        <p className="text-light/60 text-sm">Learn more →</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;