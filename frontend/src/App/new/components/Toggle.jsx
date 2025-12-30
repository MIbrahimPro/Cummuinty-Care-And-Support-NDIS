import { useEffect, useState } from 'react';

import {
    Phone, Mail, MapPin, Menu, X, Home,
    Plus, Minus, Facebook, Users,
    Activity, Heart, CheckSquare, Car, ArrowRight,
    Send, Clock, ChevronDown
} from 'lucide-react';
// Reusable Toggle/Accordion Section
export default function ToggleSection({ layout, title, subtitle, description, imageSrc, items }) {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const isRightLayout = layout === 'right';

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div className={`order-2 ${isRightLayout ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">{subtitle}</h4>
                    <h3 className="text-3xl font-bold text-blue-950 mb-6 uppercase">{title}</h3>
                    <p className="mb-8 text-gray-600 leading-relaxed text-lg">{description}</p>

                    <div className="flex flex-col gap-4">
                        {items.map((item, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-none bg-white">
                                <button
                                    onClick={() => toggle(idx)}
                                    className={`w-full flex justify-between items-center p-5 text-left font-bold text-sm uppercase tracking-wide transition-all ${openIndex === idx ? 'bg-blue-950 text-white shadow-md' : 'bg-gray-50 text-blue-950 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-1 border ${openIndex === idx ? 'border-white' : 'border-blue-950'} rounded-none`}>
                                            {openIndex === idx ? <Minus size={10} /> : <Plus size={10} />}
                                        </div>
                                        {item.title}
                                    </div>
                                </button>

                                {openIndex === idx && (
                                    <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100 bg-white animate-fadeIn">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`order-1 ${isRightLayout ? 'lg:order-1' : 'lg:order-2'} relative h-full min-h-[500px] group`}>
                    <div className={`absolute top-6 ${isRightLayout ? '-left-6' : '-right-6'} w-full h-full border-4 border-gray-100 z-0 transition-all group-hover:border-yellow-500`}></div>
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover relative z-10 shadow-lg rounded-none grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>

            </div>
        </section>
    );
};

