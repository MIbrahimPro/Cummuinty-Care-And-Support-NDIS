// src/App/new/components/ProcessSteps.jsx
import React from 'react';

const ProcessSteps = ({ title, description, steps }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                        How It Works
                    </h4>
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 uppercase mb-6">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Step Content */}
                                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                                    <div className={`bg-white p-8 shadow-lg border-l-4 border-yellow-500 lg:border-l-0 ${index % 2 === 0 ? 'lg:border-r-4' : 'lg:border-l-4'}`}>
                                        <div className="flex items-center gap-4 mb-4 lg:justify-start">
                                            <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                                            <h3 className="text-xl font-bold text-blue-950 uppercase">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-md z-10"></div>

                                {/* Empty Column for Layout */}
                                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : ''}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;