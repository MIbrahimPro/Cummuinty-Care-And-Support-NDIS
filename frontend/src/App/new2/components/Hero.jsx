import React from 'react';
import { ArrowDownRight, Stethoscope } from 'lucide-react';
import ContactSection from './contactsec';

const Hero = ({
    image,
    image2,
    simpler = false,
    heading,
    tagline,
    paragraph,
    listItems = [],
    showCallback = true,
    hasForm = false,
    location,
    onCallbackClick,
    longer = false,
}) => {
    const leftPanelBgImage = simpler ? (image2 || image) : image2;

    return (
        <section className={`flex flex-col lg:flex-row w-full relative ${longer ? 'lg:h-[950px]' : ' lg:h-[850px]'}`}>

            {/* --- LEFT PANEL: TEXT CONTENT --- */}
            <div
                className={`w-full ${simpler ? 'lg:w-full' : 'lg:w-[40%]'} text-white flex flex-col relative pt-[200px] pb-[100px]`}
            >
                {leftPanelBgImage && (
                    <img src={leftPanelBgImage} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                )}
                <div
                    className="absolute inset-0 z-0 bg-cyan"
                    style={{ opacity: leftPanelBgImage ? 0.85 : 1 }}
                ></div>

                <div className="relative z-10 px-6 lg:px-[80px] flex flex-col gap-[18px] justify-center items-center lg:items-start text-center lg:text-left flex-grow">
                    {tagline && (
                        <span className="text-[24px] lg:text-[32px] font-inter font-bold">
                            {tagline}
                        </span>
                    )}
                    <h1 className="text-[36px] lg:text-[48px] font-nohemi font-bold leading-tight">
                        {heading}
                    </h1>
                    {paragraph && (
                        <div className="text-[16px] font-inter opacity-90 max-w-md">
                            {paragraph}
                        </div>
                    )}
                    {listItems.length > 0 && (
                        <ul className="flex flex-col gap-[8px] mt-2 w-full items-center lg:items-start">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-[10px] text-[18px] font-inter font-bold text-black">
                                    <div className="mt-1 flex-shrink-0">
                                        <Stethoscope size={18} className="text-teal-900" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {showCallback && (
                    <button
                        onClick={onCallbackClick}
                        className="absolute bottom-0 left-0 right-0 z-10 w-full bg-dark py-[10px] px-6 lg:px-[80px] flex justify-between items-center group cursor-pointer hover:bg-gray-800 transition-colors"
                    >
                        <span className="text-[24px] lg:text-[36px] font-inter font-normal text-white">
                            Request a Call Back
                        </span>
                        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <ArrowDownRight size={24} className="text-cyan stroke-[2px]" />
                        </div>
                    </button>
                )}
            </div>

            {!simpler && (
                <div className="w-full lg:w-[60%] relative h-[400px] lg:h-auto bg-gray-200">
                    <img
                        src={image}
                        alt="Hero"
                        className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-black/10 z-0"></div>
                    {hasForm && (
                        <div className="absolute inset-0 z-10 hidden lg:flex items-center justify-center p-4 lg:p-0">
                            <div className="w-full max-w-lg lg:max-w-xl mx-auto">
                                <ContactSection requestOnly={false} showtimes={false} showMessage={true} customTitle={`Enquire Community Care and Support in ${location}`} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

const EnquiryForm = ({ location }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 w-full">
            <h3 className="text-[24px] font-nohemi font-bold text-black mb-4">
                Enquire Community Care and Support in {location}
            </h3>
            <div className="space-y-4">
                <div className="h-10 bg-gray-100 rounded w-full"></div>
                <div className="flex gap-4">
                    <div className="h-10 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-100 rounded w-1/2"></div>
                </div>
                <div className="h-24 bg-gray-100 rounded w-full"></div>
                <button className="bg-cyan text-white px-6 py-2 rounded font-inter font-bold">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Hero;