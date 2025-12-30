import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// If using React Router, uncomment the lines below:
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 1. Get the current path (Use useLocation() if using React Router)
    const [currentPath, setCurrentPath] = useState('/');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    // 2. Define your routes mapping
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 lg:px-8 py-5 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white w-12 h-12 flex items-center justify-center font-bold text-2xl rounded-none shadow-sm">
                        CC
                    </div>
                    <div className="leading-tight">
                        <h1 className="text-xl font-extrabold text-blue-950 uppercase tracking-tighter">Community Care</h1>
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest block">And Services</span>
                    </div>
                </div>

                {/* 3. Desktop Navigation with Real Hrefs */}
                <nav className="hidden lg:flex gap-8 items-center font-bold text-sm uppercase text-blue-950 tracking-wide">
                    {navItems.map((item) => {
                        const isActive = currentPath === item.path;
                        return (
                            <a
                                key={item.path}
                                href={item.path} // Now points to /about, /services, etc.
                                className={`transition-colors relative group ${isActive ? 'text-yellow-600' : 'hover:text-yellow-600'
                                    }`}
                            >
                                {item.label}
                                {/* Underline logic: Hidden if active, shows on hover if NOT active */}
                                <span className={`absolute -bottom-2 left-0 h-0.5 bg-yellow-500 transition-all 
                                    ${isActive ? 'w-0' : 'w-0 group-hover:w-full'}`}>
                                </span>
                            </a>
                        );
                    })}
                </nav>

                <button
                    className="lg:hidden text-blue-950 p-2 border border-gray-200 rounded-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* 4. Mobile Navigation with Real Hrefs */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
                    {navItems.map((item) => {
                        const isActive = currentPath === item.path;
                        return (
                            <a
                                key={item.path}
                                href={item.path}
                                className={`block py-4 px-6 font-bold uppercase border-b border-gray-50 transition-colors ${isActive ? 'text-yellow-600 bg-gray-50' : 'text-blue-950 hover:bg-gray-50 hover:text-yellow-600'
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}