import React, { useState } from 'react';
import { siteData } from '../data/data';
import Toggle from './Toggle';

const Footer = () => {
    const [openToggle, setOpenToggle] = useState(null);

    const handleToggle = (title) => {
        setOpenToggle(openToggle === title ? null : title);
    };

    const serviceAreas = siteData.menu.find(item => item.title === "Service Areas")?.children || [];
    const whatWeDo = siteData.menu.find(item => item.title === "What We Do")?.children || [];

    return (
        <footer className="bg-[#2a2a2a] text-white py-20 px-6 md:px-12 font-inter">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Logo & Tagline */}
                    <div className="lg:col-span-1 space-y-8 flex flex-col items-center text-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-48 w-48 object-contain rounded-full mx-auto"
                        />
                        <h2 className="text-[32px] font-bold leading-tight">
                            Community Care and
                            Support Australia Pty Ltd
                        </h2>
                        <h2 className="text-[22px] font-bold leading-tight">
                            Providing the <br /> Support You Need
                        </h2>
                        <button className="bg-cyan hover:opacity-90 transition-opacity text-white py-[15px] px-[30px] rounded-md font-medium">
                            Request a Call Back
                        </button>
                    </div>

                    {/* Column 2: Site Links & What We Do */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-[16px] font-bold uppercase mb-6">Site Links</h3>
                            <ul className="space-y-3 text-[16px] uppercase text-zinc-300">
                                {siteData.menu.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.link} className="hover:text-cyan-800 transition-colors">{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[16px] font-bold uppercase mb-6">What We Do</h3>
                            <ul className="space-y-3 text-[16px] uppercase text-zinc-300">
                                {whatWeDo.map((service, idx) => (
                                    <li key={idx}>
                                        <a href={service.link} className="hover:text-cyan-800 transition-colors">{service.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Locations */}
                    <div className="space-y-6">
                        {serviceAreas.map((area, idx) => {
                            const title = `Services in ${area.title}`;
                            return (
                                <Toggle
                                    key={idx}
                                    title={title}
                                    isOpen={openToggle === title}
                                    onToggle={() => handleToggle(title)}
                                >
                                    <ul className="space-y-3 text-[16px] uppercase text-zinc-300">
                                        {area.children?.map((child, cIdx) => (
                                            <li key={cIdx}>
                                                <a href={child.link} className="hover:text-cyan-800 transition-colors">{child.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </Toggle>
                            );
                        })}
                    </div>

                    {/* Column 4: Contacts & Support Hours */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-[16px] font-bold uppercase mb-6">Contacts</h3>
                            <ul className="space-y-3 text-[16px] uppercase text-zinc-300">
                                <li>T. <a href={`tel:${siteData.telLink}`} className="hover:text-cyan-800">{siteData.phoneNumber}</a></li>
                                <li>A. {siteData.Address}</li>
                                <li>ABN: {siteData.ABN}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[16px] font-bold uppercase mb-6">Support Hours</h3>
                            <div className="text-[16px] uppercase space-y-2">
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                                    <div key={day} className="flex justify-between gap-4">
                                        <span>{day}</span>
                                        <span className="text-gray-400">Open 24 Hours</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-gray-700 text-center text-[14px] text-gray-500 uppercase">
                    © {new Date().getFullYear()} Community Care. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;