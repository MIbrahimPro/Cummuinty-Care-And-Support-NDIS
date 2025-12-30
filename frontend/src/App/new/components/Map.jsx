
import { useEffect, useState } from 'react';

import {
    Phone, Mail, MapPin, Menu, X, Home,
    Plus, Minus, Facebook, Users,
    Activity, Heart, CheckSquare, Car, ArrowRight,
    Send, Clock, ChevronDown
} from 'lucide-react';

// ================= STYLED MAP COMPONENT =================
export default function StyledMap({ className = "" }) {
    return (

        <div className={`relative ${className}`}>
            {/* Map Container with Theme Styling */}
            <div className="relative h-[500px] w-full bg-blue-950 overflow-hidden">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-500 z-20"></div>

                {/* Map Iframe with Overlay Effect */}
                <div className="absolute inset-0">
                    <iframe
                        src="https://maps.google.com/maps?q=2%2F54%20Kingston%20Road%20Underwood%20QLD%204119&t=m&z=14&output=embed&iwloc=near"
                        title="Community Care Location"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                        loading="lazy"
                        className="opacity-80"
                    ></iframe>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/30 pointer-events-none"></div>
                </div>

                {/* Floating Info Card */}
                <div className="absolute bottom-8 left-8 right-8 md:left-8 md:right-auto md:max-w-md bg-white shadow-2xl p-6 z-10">
                    <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 p-3 shrink-0">
                            <MapPin size={24} className="text-blue-950" />
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-950 uppercase text-lg mb-1">Our Location</h4>
                            <p className="text-gray-600 mb-3">2/54 Kingston Road<br />Underwood QLD 4119</p>
                            <a
                                href="https://maps.google.com/?q=2/54+Kingston+Road+Underwood+QLD+4119"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-yellow-600 hover:text-blue-950 font-bold text-sm uppercase tracking-wider transition-colors"
                            >
                                Get Directions
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
