import { useEffect, useState } from 'react';

import {
    Phone, Mail, MapPin, Menu, X, Home,
    Plus, Minus, Facebook, Users,
    Activity, Heart, CheckSquare, Car, ArrowRight,
    Send, Clock, ChevronDown
} from 'lucide-react';

import { SERVICES_LIST } from '../data/Data.js';


export default function ContactForm({
    preSelectedService = null,
    showTitle = true,
    className = "",
    variant = "default" // "default" | "dark"
}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: preSelectedService || '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Determine if service field should be shown
    const showServiceField = !preSelectedService;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                service: preSelectedService || '',
                message: ''
            });
        }, 3000);
    };

    const isDark = variant === "dark";

    const inputClasses = isDark
        ? "w-full px-5 py-4 bg-blue-900/50 border border-blue-800 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all rounded-none"
        : "w-full px-5 py-4 bg-gray-50 border border-gray-200 text-blue-950 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all rounded-none";

    const labelClasses = isDark
        ? "block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
        : "block text-sm font-bold uppercase tracking-wider text-blue-950 mb-2";

    if (submitted) {
        return (
            <div className={`${className} text-center py-12`}>
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <CheckSquare size={40} className="text-green-500" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-blue-950'}`}>Thank You!</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    We've received your message and will get back to you shortly.
                </p>
            </div>
        );
    }

    return (
        <div className={className}>
            {showTitle && (
                <div className="mb-8">
                    <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h4>
                    <h3 className={`text-3xl font-bold uppercase ${isDark ? 'text-white' : 'text-blue-950'}`}>
                        Send Us a Message
                    </h3>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className={labelClasses}>
                        Your Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClasses}
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className={labelClasses}>
                        Email Address <span className="text-yellow-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClasses}
                    />
                </div>

                {/* Service Dropdown - Only shown if no preSelectedService */}
                {showServiceField && (
                    <div>
                        <label htmlFor="service" className={labelClasses}>
                            Select Service <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className={`${inputClasses} appearance-none cursor-pointer pr-12`}
                            >
                                <option value="">Choose a service...</option>
                                {SERVICES_LIST.map(service => (
                                    <option key={service.value} value={service.value}>
                                        {service.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown
                                size={20}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                            />
                        </div>
                    </div>
                )}

                {/* Pre-selected service indicator */}
                {preSelectedService && (
                    <div className={`p-4 border-l-4 border-yellow-500 ${isDark ? 'bg-blue-900/50' : 'bg-yellow-50'}`}>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Inquiring about:
                        </p>
                        <p className={`font-bold uppercase ${isDark ? 'text-white' : 'text-blue-950'}`}>
                            {SERVICES_LIST.find(s => s.value === preSelectedService)?.label || preSelectedService}
                        </p>
                    </div>
                )}

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className={labelClasses}>
                        Your Message <span className="text-yellow-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        required
                        rows={5}
                        className={`${inputClasses} resize-none`}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-8 text-sm uppercase tracking-wider rounded-none transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed ${isSubmitting ? '' : 'hover:-translate-y-1'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-blue-950/30 border-t-blue-950 rounded-full animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};