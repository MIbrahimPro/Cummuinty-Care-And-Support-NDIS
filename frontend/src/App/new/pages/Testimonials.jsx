// src/App/new/pages/Testimonials.jsx
import React, { useState } from 'react';
import { Star, Filter, ArrowRight, Phone, Quote, Play } from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import TestimonialCard from '../components/TestimonialCard';
import { TESTIMONIALS_DATA, SERVICES_LIST } from '../data/Data';

const TestimonialsPage = () => {
    const [filter, setFilter] = useState('all');

    // Filter testimonials
    const filteredTestimonials = filter === 'all'
        ? TESTIMONIALS_DATA
        : TESTIMONIALS_DATA.filter(t => t.service === filter);

    const featuredTestimonials = TESTIMONIALS_DATA.filter(t => t.featured);
    const averageRating = (TESTIMONIALS_DATA.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS_DATA.length).toFixed(1);

    return (
        <div className="font-sans text-gray-600 antialiased bg-white">

            {/* Page Hero */}
            <PageHero
                title={<>Client <span className="text-yellow-400">Testimonials</span></>}
                subtitle="Real stories from real people. Hear directly from our clients and their families about how Community Care has made a difference in their lives."
                tagline="Success Stories"
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[
                    { label: 'Testimonials' }
                ]}
            />

            {/* Stats Banner */}
            <section className="bg-white border-b-4 border-yellow-500 relative z-20 shadow-2xl -mt-10 mx-4 lg:mx-auto lg:max-w-6xl p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={28} className="fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <h3 className="text-3xl font-bold text-blue-950 mb-2">{averageRating}/5.0</h3>
                        <p className="text-gray-600 font-semibold uppercase text-sm">Average Rating</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Quote size={32} className="text-yellow-500 mb-4" />
                        <h3 className="text-3xl font-bold text-blue-950 mb-2">{TESTIMONIALS_DATA.length}+</h3>
                        <p className="text-gray-600 font-semibold uppercase text-sm">Happy Clients</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-yellow-500 mb-4">98%</div>
                        <h3 className="text-xl font-bold text-blue-950 mb-2">Satisfaction Rate</h3>
                        <p className="text-gray-600 font-semibold uppercase text-sm">Would Recommend Us</p>
                    </div>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            Featured Stories
                        </h4>
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                            Transforming Lives Every Day
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {featuredTestimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} variant="featured" />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Testimonials with Filter */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            More Stories
                        </h4>
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-8">
                            All Client Testimonials
                        </h2>

                        {/* Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-none transition-all ${filter === 'all'
                                    ? 'bg-blue-950 text-white'
                                    : 'bg-gray-100 text-blue-950 hover:bg-gray-200'
                                    }`}
                            >
                                All Services
                            </button>
                            {SERVICES_LIST.map((service) => (
                                <button
                                    key={service.value}
                                    onClick={() => setFilter(service.label)}
                                    className={`px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-none transition-all ${filter === service.label
                                        ? 'bg-blue-950 text-white'
                                        : 'bg-gray-100 text-blue-950 hover:bg-gray-200'
                                        }`}
                                >
                                    {service.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {filteredTestimonials
                            .filter(t => !t.featured) // Don't show featured ones again
                            .map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} variant="default" />
                            ))}
                    </div>

                    {filteredTestimonials.filter(t => !t.featured).length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No testimonials found for this service.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Video Testimonials Section (Optional - placeholder) */}
            {/* <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
                        Watch & Listen
                    </h4>
                    <h2 className="text-4xl font-bold uppercase mb-4">
                        Video Testimonials
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg">
                        Coming soon: Watch video testimonials from our clients sharing their experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative group cursor-pointer">
                            <div className="bg-blue-900/50 border border-blue-800 aspect-video flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                                <div className="bg-yellow-500 p-6 rounded-full group-hover:scale-110 transition-transform">
                                    <Play size={32} className="text-blue-950 fill-current" />
                                </div>
                            </div>
                            <p className="mt-4 text-center font-semibold">Video Testimonial {i}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section> */}

            {/* Share Your Story */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 shadow-xl border-t-4 border-yellow-500 text-center">
                        <h3 className="text-3xl font-bold text-blue-950 uppercase mb-6">
                            Share Your Story
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Are you a current client of Community Care? We'd love to hear about your experience. Your story could inspire others to seek the support they need.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-all shadow-lg inline-flex items-center gap-2"
                            >
                                Submit Your Story
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="mailto:testimonials@communitycare.com.au"
                                className="bg-transparent border-2 border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-all inline-flex items-center gap-2"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-yellow-500 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#172554 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase text-blue-950">
                        Become Our Next <span className="text-white">Success Story</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mb-10 text-blue-900 text-lg font-semibold">
                        Join hundreds of satisfied clients who trust Community Care for their disability support needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl hover:-translate-y-1"
                        >
                            Get Started Today
                        </a>
                        <a
                            href="tel:1300983885"
                            className="bg-white hover:bg-gray-100 text-blue-950 font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <Phone size={18} />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default TestimonialsPage;