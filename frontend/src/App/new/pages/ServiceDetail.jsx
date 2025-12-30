import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import {
    CheckCircle, ArrowRight, Phone, Mail,
    Users, Home, Activity, Heart, CheckSquare,
    Car, Plus, Minus, Clock, Award, Shield, Target,
    HelpCircle // Fallback icon
} from 'lucide-react';

// Components
import PageHero from '../components/PageHero';
import ContactForm from '../components/Contact'; // Importing the form above

// Data
import { SERVICES_DATA } from '../data/Data';

// Icon Mapping
const iconMap = {
    Users, Home, Activity, Heart, CheckSquare, Car,
    // Add defaults if needed
    Default: HelpCircle
};

const ServiceDetailPage = () => {
    const { serviceSlug } = useParams();
    const { pathname } = useLocation(); // Hook to detect route changes
    const [activeFaq, setActiveFaq] = useState(null);

    // 1. Scroll to top when the serviceSlug changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // 2. Find the service based on the URL param
    const service = SERVICES_DATA.find(s => s.slug === serviceSlug);

    // 3. Handle 404 - Service not found
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // 4. Resolve Icon safely
    const Icon = iconMap[service.icon] || iconMap.Default;

    // 5. Filter related services
    const relatedServices = SERVICES_DATA.filter(s =>
        service.relatedServices?.includes(s.slug)
    );

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="font-sans text-gray-600 antialiased bg-white flex flex-col min-h-screen">


            <main className="flex-grow">
                {/* Page Hero */}
                <PageHero
                    title={service.title}
                    subtitle={service.shortDescription} // Using shortDescription for cleaner hero
                    tagline={service.tagline}
                    backgroundImage={service.heroImage}
                    breadcrumbs={[
                        { label: 'Services', href: '/services' },
                        { label: service.title }
                    ]}
                />

                {/* Quick Stats Strip */}
                <section className="bg-white border-b-4 border-yellow-500 relative z-20 shadow-2xl -mt-10 mx-4 lg:mx-auto lg:max-w-6xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-950 p-4 mb-4">
                                <Award size={32} className="text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-2">NDIS Registered</h3>
                            <p className="text-gray-600">Approved Provider</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-950 p-4 mb-4">
                                <Shield size={32} className="text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-2">Experienced</h3>
                            <p className="text-gray-600">Qualified Support Workers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-950 p-4 mb-4">
                                <Clock size={32} className="text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-2">24/7 Available</h3>
                            <p className="text-gray-600">Around-the-clock support</p>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Image with Floating Icon */}
                            <div className="relative h-full min-h-[500px] group">
                                <div className="absolute top-6 -left-6 w-full h-full border-4 border-yellow-500 z-0"></div>
                                <img
                                    src={service.cardImage}
                                    alt={service.title}
                                    className="w-full h-full object-cover relative z-10 shadow-xl rounded-none grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute -bottom-8 -right-8 bg-blue-950 p-8 shadow-2xl z-20">
                                    <Icon size={64} className="text-yellow-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                    Service Overview
                                </h4>
                                <h2 className="text-4xl font-bold text-blue-950 mb-6 uppercase">
                                    What is {service.title}?
                                </h2>
                                <p className="mb-8 leading-relaxed text-lg text-gray-600 whitespace-pre-line">
                                    {service.overview?.description}
                                </p>
                                <p className="mb-8 leading-relaxed text-lg text-gray-600">
                                    Our approach is person-centered, meaning we put you at the heart of everything we do. We work collaboratively with you to ensure you receive coordinated, comprehensive care.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#contact-form"
                                        className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-transform hover:-translate-y-1 shadow-lg inline-flex items-center gap-2"
                                    >
                                        Get Started
                                        <ArrowRight size={16} />
                                    </a>
                                    <a
                                        href="tel:1300983885"
                                        className="bg-transparent border-2 border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-all inline-flex items-center gap-2"
                                    >
                                        <Phone size={16} />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                {service.overview?.highlights && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                    What We Offer
                                </h4>
                                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                                    Key Features
                                </h2>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {service.overview.highlights.map((highlight, index) => (
                                    <div key={index} className="bg-gray-50 p-8 border-l-4 border-blue-950 hover:border-yellow-500 transition-colors shadow-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-yellow-500 p-3 shrink-0 mt-1">
                                                <CheckCircle size={24} className="text-blue-950" />
                                            </div>
                                            <p className="text-gray-600 leading-relaxed self-center">
                                                {highlight}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Benefits Section */}
                {service.benefits && (
                    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        <div className="container mx-auto px-4 lg:px-8 relative z-10">
                            <div className="text-center mb-16">
                                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
                                    Why Choose This Service
                                </h4>
                                <h2 className="text-4xl font-bold uppercase mb-4">
                                    Benefits You'll Experience
                                </h2>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {service.benefits.map((benefit, index) => {
                                    const BenefitIcon = iconMap[benefit.icon] || Target;
                                    return (
                                        <div key={index} className="bg-blue-900/50 border border-blue-800 p-6 hover:border-yellow-500 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 mt-1">
                                                    <BenefitIcon size={20} className="text-yellow-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white uppercase text-sm mb-2">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed text-sm">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Process Section */}
                {service.process?.steps && (
                    <section className="py-24 bg-gray-50">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                    Our Process
                                </h4>
                                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                                    {service.process.title}
                                </h2>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                {service.process.steps.map((step, index) => (
                                    <div key={index} className="relative mb-12 last:mb-0">
                                        {index < service.process.steps.length - 1 && (
                                            <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-300 -z-10"></div>
                                        )}
                                        <div className="flex gap-8 items-start">
                                            <div className="shrink-0">
                                                <div className="w-16 h-16 bg-blue-950 flex items-center justify-center relative z-10">
                                                    <span className="text-2xl font-bold text-yellow-500">
                                                        {step.number}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-white p-8 shadow-md border-l-4 border-yellow-500">
                                                <h3 className="font-bold text-blue-950 uppercase text-xl mb-3">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs Section */}
                {service.faqs && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                    Common Questions
                                </h4>
                                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                                    Frequently Asked Questions
                                </h2>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            </div>

                            <div className="max-w-3xl mx-auto">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-none bg-white mb-4">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className={`w-full flex justify-between items-center p-6 text-left font-bold text-sm uppercase tracking-wide transition-all ${activeFaq === index ? 'bg-blue-950 text-white' : 'bg-gray-50 text-blue-950 hover:bg-gray-100'}`}
                                        >
                                            <span className="flex items-center gap-4">
                                                <div className={`p-1 border ${activeFaq === index ? 'border-white' : 'border-blue-950'} rounded-none`}>
                                                    {activeFaq === index ? <Minus size={12} /> : <Plus size={12} />}
                                                </div>
                                                {faq.question}
                                            </span>
                                        </button>
                                        {activeFaq === index && (
                                            <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Form Section */}
                <section id="contact-form" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Side - Info */}
                            <div className="text-white">
                                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    Get Started Today
                                </h4>
                                <h2 className="text-4xl lg:text-5xl font-bold uppercase mb-6">
                                    Ready for <span className="text-yellow-400">{service.title}?</span>
                                </h2>
                                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                    Take the first step towards {service.tagline?.toLowerCase() || 'better care'}. Our friendly team is ready to discuss your needs and help you get started with our {service.title} service.
                                </p>

                                {/* Contact Info Cards */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5 p-5 bg-blue-900/50 border border-blue-800 hover:border-yellow-500 transition-colors">
                                        <div className="bg-yellow-500 p-4 shrink-0">
                                            <Phone size={24} className="text-blue-950" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase text-sm mb-1">Call Us</h4>
                                            <a href="tel:1300983885" className="text-xl text-yellow-400 hover:text-yellow-300 transition-colors">
                                                1300 983 885
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-5 bg-blue-900/50 border border-blue-800 hover:border-yellow-500 transition-colors">
                                        <div className="bg-yellow-500 p-4 shrink-0">
                                            <Mail size={24} className="text-blue-950" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase text-sm mb-1">Email Us</h4>
                                            <a href="mailto:info@communitycare.com.au" className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors">
                                                info@communitycare.com.au
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Indicators */}
                                <div className="mt-10 pt-10 border-t border-blue-800">
                                    <p className="text-gray-400 text-sm mb-4">Why choose us?</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-yellow-500 shrink-0" />
                                            <span>NDIS Registered Provider</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-yellow-500 shrink-0" />
                                            <span>Experienced, Qualified Team</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-yellow-500 shrink-0" />
                                            <span>Person-Centered Approach</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Side - Form with Pre-selected Service */}
                            <div className="bg-white p-8 lg:p-10 shadow-2xl">
                                <ContactForm
                                    preSelectedService={service.slug}
                                    variant="default"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Related Services */}
                {relatedServices.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                    Explore More
                                </h4>
                                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                                    Related Services
                                </h2>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {relatedServices.map((relService) => {
                                    const RelIcon = iconMap[relService.icon] || iconMap.Default;
                                    return (
                                        <a
                                            key={relService.slug}
                                            href={`/service/${relService.slug}`}
                                            className="group bg-white p-8 shadow-md hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-yellow-500"
                                        >
                                            <div className="bg-blue-950 p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                                                <RelIcon size={32} className="text-yellow-500" />
                                            </div>
                                            <h3 className="font-bold text-blue-950 uppercase text-lg mb-3 group-hover:text-yellow-600 transition-colors">
                                                {relService.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {relService.shortDescription?.substring(0, 120)}...
                                            </p>
                                            <span className="text-yellow-600 font-bold text-sm uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                                Learn More
                                                <ArrowRight size={14} />
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

            </main>

        </div>
    );
};

export default ServiceDetailPage;