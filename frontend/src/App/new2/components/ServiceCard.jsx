import React from 'react';
import { ArrowDownRight } from 'lucide-react'; // Or use a standard SVG

const ServiceCard = ({ image, title, description, link }) => {
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-2xl p-6 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 gap-8">
            {/* Image Section */}
            <div className="h-48 overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-[28px] font-nohemi font-bold text-gray-900 mb-4 leading-tight">
                    {title}
                </h3>

                <p className="text-gray-600 text-[16px] font-inter leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Footer / Action Button */}
                <div className="flex justify-end mt-auto">
                    <a
                        href={link}
                        className="flex items-center justify-center w-13 h-13 bg-cyan rounded-full hover:bg-cyan transition-colors duration-200"
                        aria-label={`Read more about ${title}`}
                    >
                        <ArrowDownRight className="w-7 h-7 text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;