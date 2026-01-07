import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { siteData } from '../data/data'; // Ensure this path matches your file structure

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 1. Handle Scroll Effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. Lock Body Scroll when Menu is Open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            {/* --- MOBILE OVERLAY (Background Dimmer) --- 
          Visible only when isOpen. Clicking it closes the menu.
          z-index: 90 (Above everything else, below Sidebar)
      */}
            <div
                className={`
          fixed inset-0 bg-black/60 z-[90] lg:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
                onClick={() => setIsOpen(false)}
            >
                {/* --- FLOATING CLOSE BUTTON --- 
            Positioned relative to the viewport.
            Left: 85% (Sidebar width) + 10px spacing.
            Top: 10px.
        */}
                <button
                    className="absolute top-[10px] left-[calc(85%+10px)] text-white p-1"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent double-triggering the overlay click
                        setIsOpen(false);
                    }}
                >
                    <X size={26} />
                </button>
            </div>

            {/* --- MOBILE SIDEBAR (Slides in from Left) --- 
          Width: 85%
          z-index: 100 (Topmost)
      */}
            <div
                className={`
          fixed top-0 left-0 h-full w-[85%] bg-[#f4f4f4] z-[100] overflow-y-auto shadow-2xl transition-transform duration-300 ease-out lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="px-[20px] py-[40px]">
                    <div className="flex flex-col">
                        {siteData.menu.map((item, idx) => (
                            <MobileMenuItem key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MAIN HEADER (Fixed Top) --- 
          z-index: 50 (Below overlay/sidebar)
      */}
            <header
                className="fixed top-0 left-0 w-full z-[50]"
            >
                {/* Mobile Navbar Header (< lg) */}
                <div className="lg:hidden bg-white w-full shadow-md">
                    <div className="flex justify-between items-center h-[120px] px-[10px]">
                        {/* Hamburger (Left) */}
                        <div className="w-[75px] flex justify-center items-center">
                            <button onClick={() => setIsOpen(true)} className="p-2">
                                <Menu size={25} className="text-[#1CA4AC]" />
                            </button>
                        </div>

                        {/* Logo (Center) */}
                        <div className="flex-shrink-0">
                            <div className="h-[100px] w-[100px] bg-[#1CA4AC] rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Phone Icon (Right) */}
                        <div className="w-[75px] flex justify-center items-center">
                            <a href={`tel:${siteData.telLink}`} className="text-[#1CA4AC]">
                                <div className="p-2">
                                    <Phone size={25} className="text-cyan" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desktop Navbar Header (>= lg) */}
                <div className="hidden lg:block w-full transition-all duration-300">
                    <div
                        className={`
              bg-white shadow-md mx-auto transition-all duration-500 ease-in-out flex items-center justify-between rounded-[10px] w-[calc(100%-160px)]
              ${isScrolled
                                ? 'mt-0 py-[10px] px-[80px]'
                                : '  mt-[20px] py-[10px] px-[80px]'
                            }
            `}
                    >
                        {/* Desktop Logo */}
                        <div className={`bg-[#1CA4AC] rounded-full overflow-hidden transition-all duration-500 flex items-center justify-center ${isScrolled ? 'w-[100px] h-[100px]' : 'w-[110px] h-[110px]'}`}>
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>

                        {/* Desktop Links */}
                        <nav className="flex items-center gap-4 h-full">
                            {siteData.menu.map((item, idx) => (
                                <DesktopMenuItem key={idx} item={item} />
                            ))}
                        </nav>

                        {/* Desktop Call Button */}
                        <a href={`tel:${siteData.telLink}`} className="bg-[#1CA4AC] text-white font-inter text-[16px] font-bold px-[25px] py-[12px] rounded-[10px] hover:bg-[#158a91] transition-colors uppercase">
                            CALL {siteData.phoneNumber}
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

// --- HELPER SUB-COMPONENTS ---

// Mobile Menu Item (Recursive)
const MobileMenuItem = ({ item, level = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;

    // Style Logic
    const isActive = item.title === 'Home'; // Placeholder logic
    const paddingClass = level === 0 ? "py-[12px]" : "py-[12px] px-[8px]";
    const textClass = isActive ? "text-[#1CA4AC] underline underline-offset-4" : "text-black";

    return (
        <div className="w-full">
            <a href={item.link} className={`block text-[14px] font-inter uppercase tracking-wide flex items-center ${paddingClass} ${textClass}`}>
                {item.title}
                {hasChildren && <span className="ml-2 pl-[15px]"><ChevronUp size={16} className="text-black/50" /></span>}
            </a>
            {/* Children are always open */}
            {hasChildren && (
                <div className="pl-4 border-l border-gray-200 ml-2">
                    {item.children.map((child, idx) => (
                        <MobileMenuItem key={idx} item={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

// Desktop Menu Item (Dropdowns)
const DesktopMenuItem = ({ item }) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="relative group h-full flex items-center px-[10px]">
            <a href={item.link} className="text-black hover:text-[#1CA4AC] text-[14px] font-inter uppercase flex items-center transition-colors">
                {item.title}
                {hasChildren && <ChevronDown size={14} className="ml-2" />}
            </a>

            {/* Dropdown Logic */}
            {hasChildren && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                    {item.children.map((child, idx) => (
                        <div key={idx} className="relative group/nested border-b border-gray-50 last:border-0">
                            <a href={child.link} className="block px-[15px] py-[15px] text-[14px] font-inter text-black hover:text-[#1CA4AC] uppercase bg-white hover:bg-gray-50 flex justify-between items-center">
                                {child.title}
                                {child.children && <ChevronRight size={14} />}
                            </a>
                            {/* Nested Dropdown */}
                            {child.children && (
                                <div className="absolute top-0 left-full w-64 bg-white shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform translate-x-4 group-hover/nested:translate-x-0">
                                    {child.children.map((gc, gIdx) => (
                                        <a key={gIdx} href={gc.link} className="block px-[15px] py-[15px] text-[14px] font-inter text-black hover:text-[#1CA4AC] uppercase border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                            {gc.title}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;