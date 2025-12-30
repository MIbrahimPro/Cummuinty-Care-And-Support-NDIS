// src/App/new/components/BenefitsGrid.jsx
import React from 'react';
import { Users, Home, Activity, Heart, CheckSquare, Car } from 'lucide-react';

const iconMap = {
    Users,
    Home,
    Activity,
    Heart,
    CheckSquare,
    Car
};

const BenefitsGrid = ({ benefits, title = "Key Benefits" }) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                        Advantages
                    </h4>
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 uppercase mb-4">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon] || Heart;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-50 border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-yellow-500 transition-colors"></div>

                                {/* Icon */}
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent size={28} className="text-blue-950" />
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-blue-950 text-lg uppercase mb-3 group-hover:text-yellow-600 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsGrid;