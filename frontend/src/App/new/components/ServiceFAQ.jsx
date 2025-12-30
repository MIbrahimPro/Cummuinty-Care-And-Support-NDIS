// src/App/new/components/ServiceFAQ.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ServiceFAQ = ({ faqs, title = "Frequently Asked Questions" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            FAQs
                        </h4>
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 uppercase mb-4">
                            {title}
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className={`w-full flex items-start justify-between gap-4 p-6 text-left transition-colors ${openIndex === index ? 'bg-blue-950 text-white' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-blue-950'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 p-1 border rounded-none ${openIndex === index ? 'border-white text-white' : 'border-blue-950 text-blue-950'
                                        }`}>
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="p-6 bg-white border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;