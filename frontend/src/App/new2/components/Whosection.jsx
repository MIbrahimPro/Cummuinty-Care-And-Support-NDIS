import React from 'react';
import { Stethoscope } from 'lucide-react';
import { siteData } from '../data/data';

const WhoWeAreSection = () => {

    // Internal helper for smart-linking locations
    const renderSmartText = (text) => {
        if (!text) return null;
        const locations = ["Ipswich", "Logan", "Brisbane"];
        let parts = [text];

        locations.forEach(loc => {
            const newParts = [];
            parts.forEach(part => {
                if (typeof part !== 'string') { newParts.push(part); return; }
                const regex = new RegExp(`(${loc})`, 'gi');
                const split = part.split(regex);
                split.forEach((sub, i) => {
                    if (sub.toLowerCase() === loc.toLowerCase()) {
                        newParts.push(<span key={i} className="text-cyan font-bold">{sub}</span>);
                    } else if (sub !== "") newParts.push(sub);
                });
            });
            parts = newParts;
        });
        return parts;
    };

    const values = [
        {
            title: "Integrity",
            description: "We believe in honesty, transparency and doing what’s right. Our participants trust us to provide reliable and ethical care, and we are committed to maintaining that trust through every interaction."
        },
        {
            title: "Compassion",
            description: "Caring for others is at the heart of our business. We approach every situation with empathy and kindness, always striving to understand the unique needs of each participant and to provide support that is both respectful and effective."
        },
        {
            title: "Empowerment",
            description: "We are dedicated to empowering our participants to live independently and confidently. By providing the necessary tools, resources and support, we help individuals achieve their goals and improve their quality of life."
        },
        {
            title: "Community",
            description: "Community is everything to us. We are deeply invested in the well-being of the Ipswich, Logan and the greater Brisbane areas, and we work tirelessly to contribute to a stronger, more connected community."
        }
    ];

    return (
        <section className="bg-[#f0f0f0] py-20 px-6 md:px-12 font-inter">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Left Side Content */}
                <div className="w-full lg:w-3/5 space-y-6">
                    <h2 className="text-[42px] font-nohemi font-bold text-gray-900 leading-tight">
                        Who We Are
                    </h2>

                    <h3 className="text-[18px] font-bold text-gray-800 uppercase tracking-wide">
                        Our Values
                    </h3>

                    <p className="text-[16px] text-gray-700 leading-relaxed">
                        At Community Care and Support, our values are the foundation of everything we do.
                        These values guide our approach to care, ensuring that we consistently
                        provide the highest standard of support to our participants.
                    </p>

                    {/* Values List */}
                    <div className="space-y-8 py-4">
                        {values.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <Stethoscope size={24} className="text-cyan shrink-0 mt-1" />
                                <div className="text-[16px] text-gray-700 leading-relaxed">
                                    <span className="font-bold text-gray-900">{item.title}:</span> {item.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-[16px] text-gray-700 leading-relaxed">
                        At Community Care and Support, we are proud to be a part of the {renderSmartText("Ipswich")}, {renderSmartText("Logan")} and the greater {renderSmartText("Brisbane")} communities.
                        Our long-standing local presence, family-owned values, and unwavering commitment to our participants set us apart as a trusted provider of NDIS support services.
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-cyan hover:opacity-90 transition-opacity text-white py-[15px] px-[35px] rounded-lg font-bold text-[16px]"
                        >
                            Request a Call Back
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-2/5">
                    <div className="rounded-[30px] overflow-hidden shadow-sm aspect-[3/4]">
                        <img
                            src="https://picsum.photos/1200"
                            alt="Our Senior Participant"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeAreSection;