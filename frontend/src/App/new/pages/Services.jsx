import React from 'react';
import {
    ArrowRight,
    Users,
    Home,
    Activity,
    Heart,
    CheckSquare,
    Car,
    Phone,
    CheckCircle2 // Added for the features list
} from 'lucide-react';

// Assuming you are importing these from your constants file
import { SERVICES_DATA } from '../data/Data';
import PageHero from '../components/PageHero';

// Map string names from data to actual Components
const iconMap = {
    Users,
    Home,
    Activity,
    Heart,
    CheckSquare,
    Car
};

const ServicesPage = () => {
    return (
        <div className="font-sans text-gray-600 antialiased bg-white">

            {/* 1. Page Hero */}
            <PageHero
                title={<>Our <span className="text-yellow-400">Services</span></>}
                subtitle="Comprehensive disability support tailored to your unique needs."
                tagline="What We Offer"
                // Using a generic hero image for the top of the page
                backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Services' }
                ]}
            />

            {/* 2. Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 uppercase mb-6">
                            Empowering You to Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-500">Independently</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            At Community Care, we offer a comprehensive range of disability support services designed to enhance your independence, wellbeing, and quality of life. As a registered NDIS provider, we deliver personalized care that respects your choices.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            {['NDIS Registered', '24/7 Support Available', 'Experienced Team'].map((badge) => (
                                <div key={badge} className="flex items-center gap-2 bg-gray-50 px-4 py-2 border-l-4 border-yellow-500">
                                    <CheckSquare size={18} className="text-yellow-600" />
                                    <span className="font-bold text-blue-950">{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services List - Alternating Layout */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    {SERVICES_DATA.map((service, index) => {
                        const isEven = index % 2 === 0;
                        // Fallback icon if the string in data doesn't match the map
                        const Icon = iconMap[service.icon] || Users;

                        return (
                            <div key={service.id} className="mb-24 last:mb-0">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* --- Image Column --- */}
                                    <div className={`order-1 ${!isEven ? 'lg:order-2' : 'lg:order-1'} relative h-full min-h-[400px] group`}>
                                        {/* Decorative Border Box */}
                                        <div className={`absolute top-6 ${isEven ? '-left-6' : '-right-6'} w-full h-full border-4 border-gray-200 z-0 transition-all group-hover:border-yellow-500`}></div>

                                        {/* Main Image - Uses cardImage if available, else heroImage */}
                                        <img
                                            src={service.cardImage || service.heroImage}
                                            alt={service.title}
                                            className="w-full h-full object-cover relative z-10 shadow-lg rounded-none grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/3]"
                                        />

                                        {/* Floating Icon Badge */}
                                        <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} bg-blue-950 p-6 shadow-xl z-20`}>
                                            <Icon size={40} className="text-yellow-500" />
                                        </div>
                                    </div>

                                    {/* --- Content Column --- */}
                                    <div className={`order-2 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>

                                        {/* Tagline */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-yellow-500 w-1 h-12"></div>
                                            <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                                                {service.tagline}
                                            </h4>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-3xl font-bold text-blue-950 mb-6 uppercase leading-tight">
                                            {service.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="mb-8 leading-relaxed text-lg text-gray-600">
                                            {service.shortDescription}
                                        </p>

                                        {/* Highlights List (Replaces the broken Key Features) */}
                                        {service.overview && service.overview.highlights && (
                                            <div className="bg-white p-6 border border-gray-100 shadow-sm mb-8">
                                                <h5 className="font-bold text-blue-950 uppercase text-sm mb-4 border-b border-gray-100 pb-2">
                                                    Key Highlights
                                                </h5>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {/* We only show the first 4 highlights to keep the card clean */}
                                                    {service.overview.highlights.slice(0, 4).map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={16} />
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* CTA Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <a
                                                href={`/services/${service.slug}`}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-8 text-sm uppercase tracking-wider rounded-none transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
                                            >
                                                Learn More
                                                <ArrowRight size={16} />
                                            </a>
                                            <a
                                                href={`/contact?service=${service.slug}`}
                                                className="bg-transparent border-2 border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-4 px-8 text-sm uppercase tracking-wider rounded-none transition-all inline-flex items-center gap-2"
                                            >
                                                <Phone size={16} />
                                                Enquire Now
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. Bottom CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-800 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase">
                        Ready to Get <span className="text-yellow-400">Started?</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mb-10 text-gray-200 text-lg">
                        Let's discuss how our services can support your unique needs and goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className="bg-yellow-500 hover:bg-white hover:text-blue-950 text-blue-950 font-bold py-4 px-12 text-sm uppercase tracking-wider shadow-xl transition-all">
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;