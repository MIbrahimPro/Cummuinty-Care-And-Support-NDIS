import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const heroRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Hero animation
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl.from(heroRef.current.querySelector('h1'), {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
        });
        heroTl.from(
            heroRef.current.querySelector('.hero-text'),
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
            },
            '-=0.5'
        );

        // Service cards animation
        cardsRef.current.forEach((card, index) => {
            gsap.from(card, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
            });

            // Hover animation setup
            const handleMouseEnter = () => {
                gsap.to(card.querySelector('.service-image'), {
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card.querySelector('.service-image'), {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });
    }, []);

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden"
            >
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-dark/70 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive NDIS support services designed to help you achieve your
                        goals and live life to the fullest.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="group block"
                            >
                                <div className="bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div
                                            className="service-image w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                                        {/* Service number */}
                                        <div className="absolute top-6 right-6 w-12 h-12 bg-light/90 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30">
                                            <span className="text-lg font-bold text-primary">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-dark/70 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                                            <span>Learn More</span>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-light/70 text-lg mb-8">
                        We offer customized support solutions. Get in touch to discuss your specific needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-light rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
                    >
                        <span>Contact Us</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;