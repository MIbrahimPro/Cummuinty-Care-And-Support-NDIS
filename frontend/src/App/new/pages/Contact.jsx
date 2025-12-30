import { useEffect, useState } from 'react';

import {
    Phone, Mail, MapPin, Menu, X, Home,
    Plus, Minus, Facebook, Users,
    Activity, Heart, CheckSquare, Car, ArrowRight,
    Send, Clock, ChevronDown
} from 'lucide-react';

import ContactForm from '../components/Contact.jsx';
import StyledMap from '../components/Map.jsx';



// ================= CONTACT PAGE COMPONENT =================
export default function ContactPage() {
    return (
        <div className="font-sans text-gray-600 antialiased bg-white">


            {/* Page Hero */}
            <section className="relative py-32 bg-blue-950 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/80"></div>

                {/* Decorative Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase mb-6">
                        Contact <span className="text-yellow-400">Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions about our services? We're here to help. Reach out to us and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Phone Card */}
                            <div className="bg-white p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-950 p-4 shrink-0">
                                        <Phone size={24} className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950 uppercase text-lg mb-2">Call Us</h4>
                                        <p className="text-gray-600 mb-2">After Hours Support</p>
                                        <a href="tel:1300983885" className="text-xl font-bold text-blue-950 hover:text-yellow-600 transition-colors">
                                            1300 983 885
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-950 p-4 shrink-0">
                                        <Mail size={24} className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950 uppercase text-lg mb-2">Email Us</h4>
                                        <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                                        <a href="mailto:info@communitycare.com.au" className="text-lg font-bold text-blue-950 hover:text-yellow-600 transition-colors break-all">
                                            info@communitycare.com.au
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-950 p-4 shrink-0">
                                        <MapPin size={24} className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950 uppercase text-lg mb-2">Visit Us</h4>
                                        <p className="text-gray-600">
                                            2/54 Kingston Road<br />
                                            Underwood QLD 4119
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-white p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-950 p-4 shrink-0">
                                        <Clock size={24} className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950 uppercase text-lg mb-2">Office Hours</h4>
                                        <ul className="text-gray-600 space-y-1">
                                            <li className="flex justify-between gap-4">
                                                <span>Mon - Fri:</span>
                                                <span className="font-semibold text-blue-950">9:00AM - 5:00PM</span>
                                            </li>
                                            <li className="flex justify-between gap-4">
                                                <span>Saturday:</span>
                                                <span className="text-yellow-600 font-semibold">Closed</span>
                                            </li>
                                            <li className="flex justify-between gap-4">
                                                <span>Sunday:</span>
                                                <span className="text-yellow-600 font-semibold">Closed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 lg:p-12 shadow-xl">
                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Styled Map */}
            <StyledMap />

        </div>
    );
}