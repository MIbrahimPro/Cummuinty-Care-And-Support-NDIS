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
        },
        {
            question: "What specific types of disability services do you provide?",
            answer: "We offer a wide range of disability services, including Supported Independent Living (SIL), assistance with daily personal activities, household tasks, community participation, travel and transport, and group/centre activities. Our goal is to provide comprehensive support tailored to your individual needs."
        },
        {
            question: "How are your support workers qualified and trained?",
            answer: "Our support workers are carefully selected and undergo rigorous training, including holding relevant certifications in disability support. They are trained in first aid, manual handling, and person-centered care to ensure they provide the highest quality of support."
        },
        {
            question: "What is the NDIS and how can you help me navigate it?",
            answer: "The National Disability Insurance Scheme (NDIS) is a government-funded scheme that provides support to people with a permanent and significant disability. Our experienced team can help you understand your eligibility, assist with the application process, and help you create a personalized care plan to make the most of your NDIS funding."
        },
        {
            question: "How do you create a personalized care plan for participants?",
            answer: "We create personalized care plans through a collaborative process. We start with a detailed consultation to understand your unique needs, goals, and preferences. We then work with you, your family, and any other relevant stakeholders to develop a tailored support plan that empowers you to achieve your goals."
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