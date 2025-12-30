// src/App/new/components/RelatedServices.jsx
import React from 'react';
import { ArrowRight, Users, Home, Activity, Heart, CheckSquare, Car } from 'lucide-react';
import { getRelatedServices } from '../data/Data';

const iconMap = {
    Users,
    Home,
    Activity,
    Heart,
    CheckSquare,
    Car
};

const RelatedServices = ({ serviceSlugs }) => {
    const services = getRelatedServices(serviceSlugs);

    if (services.length === 0) return null;

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                        Explore More
                    </h4>
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 uppercase mb-4">
                        Related Services
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon] || Heart;
                        return (
                            <a
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group bg-gray-50 border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden block"
                            >
                                {/* Hover Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-yellow-500 transition-colors"></div>

                                {/* Icon */}
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent size={28} className="text-blue-950" />
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-blue-950 text-lg uppercase mb-3 group-hover:text-yellow-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {service.shortDescription}
                                </p>

                                {/* Link */}
                                <span className="inline-flex items-center gap-2 text-yellow-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RelatedServices;