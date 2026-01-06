import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/data';

const ServiceList = () => {
    return (
        <section className="bg-[#EFEEEA] py-16 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-black text-[#333] text-center mb-16">
                    Services We Offer
                </h2>

                {/* Flex Wrapper for Grid Logic */}
                <div className="flex flex-wrap justify-center gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="flex w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
                        >
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;