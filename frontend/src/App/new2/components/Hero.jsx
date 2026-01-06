import React from 'react';
import { ArrowDownRight, Stethoscope, Check } from 'lucide-react'; // Example icons

const Hero = ({
    image,
    heading,
    tagline,
    paragraph,
    listItems = [],
    showCallback = true,
    hasForm = false,
    onCallbackClick,
}) => {
    return (
        <section className="flex flex-col lg:flex-row w-full lg:h-[850px] relative">

            {/* --- LEFT PANEL: TEXT CONTENT --- */}
            {/* Desktop: 40% width, 750px height. 
         Mobile: 100% width, auto height.
         Padding: Top 200px (both), Bottom 100px (Desktop).
      */}
            <div className="w-full lg:w-[40%] bg-cyan text-white flex flex-col relative pt-[200px] pb-[100px] relative">

                {/* Content Container (Handles the side padding) */}
                <div className="px-6 lg:px-[80px] flex flex-col gap-[18px] justify-center items-center lg:items-start text-center lg:text-left flex-grow">

                    {/* 1. Tagline (Optional) */}
                    {tagline && (
                        <span className="text-[20px] lg:text-[24px] font-inter opacity-90">
                            {tagline}
                        </span>
                    )}

                    {/* 2. Heading (Required) */}
                    <h1 className="text-[36px] lg:text-[48px] font-nohemi font-bold leading-tight">
                        {heading}
                    </h1>

                    {/* 3. Paragraph (Optional) */}
                    {paragraph && (
                        <div className="text-[16px] font-inter opacity-90 max-w-md">
                            {paragraph}
                        </div>
                    )}

                    {/* 4. List (Optional) */}
                    {listItems.length > 0 && (
                        <ul className="flex flex-col gap-[8px] mt-2 w-full items-center lg:items-start">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-[10px] text-[16px] font-inter">
                                    <div className="mt-1 flex-shrink-0">
                                        {/* Default Icon: User/Check or passed via item object if complex */}
                                        <Stethoscope size={16} className="text-white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 5. Request Call Back Button 
            - Stick to bottom on Desktop
            - Full Width of the panel
            - Padding 80px sides to match content alignment
        */}
                {showCallback && (
                    <button
                        onClick={onCallbackClick}
                        className="w-full bg-dark mt-10 lg:mt-auto py-[10px] px-6 lg:px-[80px] flex justify-between items-center group cursor-pointer hover:bg-gray-800 transition-colors absolute bottom-0 left-0 right-0"
                    >
                        <span className="text-[24px] lg:text-[36px] font-inter font-normal text-white">
                            Request a Call Back
                        </span>

                        {/* Circle Icon */}
                        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            {/* Arrow tilted bottom right */}
                            <ArrowDownRight size={24} className="text-cyan stroke-[2px]" />
                        </div>
                    </button>
                )}
            </div>


            {/* --- RIGHT PANEL: IMAGE / FORM --- */}
            {/* Desktop: 60% width, 750px height.
         Mobile: 100% width, Height depends on content/aspect ratio.
      */}
            <div className="w-full lg:w-[60%] relative h-[400px] lg:h-auto bg-gray-200">

                {/* Background Image */}
                <img
                    src={image}
                    alt="Hero"
                    className="w-full h-full object-cover absolute inset-0 z-0"
                />

                {/* Overlay for aesthetics (optional, based on your images) */}
                {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}

                {/* --- FORM OVERLAY VARIANT --- */}
                {hasForm && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-4 lg:p-0">
                        {/* Form Container Styles:
               Desktop padding reference: "200 top, 100 bottom, 80 sides" relative to the image block?
               Or just centered nicely. Based on image_7899aa.jpg, it's a white card floating.
            */}
                        <div className="w-full max-w-lg lg:max-w-xl mx-auto">
                            <EnquiryFormPlaceholder />
                        </div>
                    </div>
                )}
            </div>

        </section>
    );
};


// --- Placeholder Component for the Form ---
const EnquiryFormPlaceholder = () => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 w-full">
            <h3 className="text-[24px] font-nohemi font-bold text-black mb-4">
                Enquire Serenity Strides in Logan
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