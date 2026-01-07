import React from 'react';
import { Stethoscope } from 'lucide-react';
import { siteData } from '../data/data';

const SmartSection = ({
    title,
    paragraphs = [],
    paragraphstwo = [],
    image = null,
    imagePosition = 'left', // 'left', 'right', or 'none'
    listItems = [],
    showButton = false,
    buttonText = "Request a Call Back"
}) => {

    // Logic to build the smart links from siteData
    const renderSmartText = (text) => {
        if (!text) return null;
        let parts = [text];

        // Create a flat list of all locations and services for auto-linking
        const linkableTerms = [];
        siteData.menu.forEach(item => {
            if (item.children) {
                item.children.forEach(child => {
                    linkableTerms.push({ text: child.title, link: child.link });
                    if (child.children) child.children.forEach(s => linkableTerms.push({ text: s.title, link: s.link }));
                });
            }
        });

        // Simple keyword replacement logic
        linkableTerms.sort((a, b) => b.text.length - a.text.length).forEach(term => {
            const newParts = [];
            parts.forEach(part => {
                if (typeof part !== 'string') { newParts.push(part); return; }
                const regex = new RegExp(`(${term.text})`, 'gi');
                const split = part.split(regex);
                split.forEach((sub, i) => {
                    if (sub.toLowerCase() === term.text.toLowerCase()) {
                        newParts.push(<a key={i} href={term.link} className="text-cyan font-bold hover:underline">{sub}</a>);
                    } else if (sub !== "") newParts.push(sub);
                });
            });
            parts = newParts;
        });
        return parts;
    };

    const isCentered = imagePosition === 'none';

    return (
        <section className="bg-white py-16 px-6 font-inter">
            <div className={`max-w-7xl mx-auto flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-12 items-center ${isCentered ? 'text-center' : ''}`}>

                {/* Image Column */}
                {!isCentered && image && (
                    <div className="w-full lg:w-1/2 h-full">
                        <div className="rounded-[24px] overflow-hidden shadow-md h-full ">
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                )}

                {/* Content Column */}
                <div className={`w-full ${isCentered ? 'max-w-3xl mx-auto' : 'lg:w-1/2'} space-y-6`}>
                    <h2 className="text-[42px] font-nohemi font-bold text-gray-900 leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-4">
                        {paragraphs.map((p, i) => (
                            <p key={i} className="text-[16px] text-gray-700 leading-relaxed">
                                {renderSmartText(p)}
                            </p>
                        ))}
                    </div>

                    {listItems.length > 0 && (
                        <ul className={`grid grid-cols-1 gap-3 py-2 ${isCentered ? 'justify-items-center' : ''}`}>
                            {listItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Stethoscope size={18} className="text-cyan shrink-0 mt-1" />
                                    <p className="text-[16px] text-gray-700 leading-relaxed">
                                        {typeof item === 'object' && item.heading ? (
                                            <>
                                                <span className="font-bold text-gray-900">{item.heading}</span>{': '}
                                                {item.text}
                                            </>
                                        ) : (
                                            <>{typeof item === 'object' ? item.text : item}</>
                                        )}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="space-y-4">
                        {paragraphstwo.map((p, i) => (
                            <p key={i} className="text-[16px] text-gray-700 leading-relaxed">
                                {renderSmartText(p)}
                            </p>
                        ))}
                    </div>
                    {showButton && (
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="inline-block bg-cyan hover:opacity-90 transition-all text-white py-[15px] px-[35px] rounded-lg font-bold text-[16px]"
                            >
                                {buttonText}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SmartSection;