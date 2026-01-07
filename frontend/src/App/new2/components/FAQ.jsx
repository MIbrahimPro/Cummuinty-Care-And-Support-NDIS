import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional: using lucide-react for icons

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(1); // Defaulting the second item open as per image

    const faqs = [
        {
            question: "How do I apply for NDIS support?",
            answer: "To apply for NDIS support, you typically need to complete an Access Request Form and provide evidence of your disability. Our team can guide you through each step of the documentation process."
        },
        {
            question: "What types of disability support services are available?",
            answer: "Community Care and Support offers a range of disability support services to patients in Ipswich and Logan and the greater Brisbane area, including personal care assistance, in-home support, community access programs and help with daily living tasks. These services are designed to ensure individuals can live safely and comfortably in their own homes while remaining active and connected within their community."
        },
        {
            question: "How do I access NDIS services if I am new to the NDIS?",
            answer: "If you are new, you first need to confirm your eligibility. Once approved, you will have a planning meeting to determine your goals and budget, after which you can choose Community Care and Support as your provider."
        }
    ];

    return (
        <section className="min-h-[75vh] w-full flex flex-col items-center justify-center bg-white py-16 px-4">
            {/* Heading */}
            <h2 className="text-[42px] font-nohemi font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
            </h2>

            {/* FAQ Container */}
            <div className="w-full max-w-4xl space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 bg-[#eeeeee] hover:bg-gray-200 transition-colors text-left"
                        >
                            <span className="text-[22px] font-nohemi font-bold text-gray-900">
                                {faq.question}
                            </span>
                            <div className="bg-cyan rounded-full p-1 text-white">
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </button>

                        {/* Answer - Collapsible */}
                        {openIndex === index && (
                            <div className="bg-[#eeeeee] px-6 pb-6">
                                <p className="text-[16px] font-inter text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Enquire Button */}
            <button className="mt-12 bg-cyan hover:bg-cyan-600 transition-colors text-white py-[15px] px-[30px] rounded-md font-inter font-medium">
                Enquire Now
            </button>
        </section>
    );
};

export default FAQSection;