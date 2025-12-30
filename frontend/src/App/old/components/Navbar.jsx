import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef(null);
    const linkRefs = useRef([]);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, {
                clipPath: 'circle(150% at 95% 5%)',
                duration: 0.8,
                ease: 'power4.inOut',
            });
            gsap.from(linkRefs.current, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.3,
                ease: 'power3.out',
            });
            document.body.style.overflow = 'hidden';
        } else {
            gsap.to(overlayRef.current, {
                clipPath: 'circle(0% at 95% 5%)',
                duration: 0.8,
                ease: 'power4.inOut',
            });
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[110] px-6 md:px-12 py-4 flex justify-between items-center">
                <div
                    className={`absolute inset-0 -z-10 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backgroundColor: 'var(--color-primary-pale)',
                        backdropFilter: 'blur(12px)',
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                />

                <Link to="/" className="group relative z-10">
                    <div
                        className={`absolute -inset-4 -z-10 blur-xl rounded-full transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-80'}`}
                        style={{ backgroundColor: 'var(--color-primary-pale)' }}
                    />
                    <h1 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-dark'}`}>
                        CCnS
                    </h1>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-12 h-12 rounded-full flex items-center justify-center group transition-all duration-300"
                >
                    <div
                        className={`absolute inset-0 -z-10 blur-md rounded-full transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                        style={{ backgroundColor: 'var(--color-primary-pale)' }}
                    />
                    <div className="w-6 h-5 flex flex-col justify-between z-10">
                        <span className={`w-full h-1 rounded-full bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-1 rounded-full bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-1 rounded-full bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            <div
                ref={overlayRef}
                className="fixed inset-0 bg-dark z-[100]"
                style={{ clipPath: 'circle(0% at 95% 5%)' }}
            >
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-8 md:gap-12">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                ref={(el) => (linkRefs.current[index] = el)}
                                className="group relative"
                            >
                                <span className="text-5xl md:text-7xl font-bold text-light hover:text-primary transition-colors duration-300">
                                    {link.name}
                                </span>
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>

                    <div className="absolute bottom-12 right-12 flex gap-4">
                        {[<FaInstagram size={30} key="i" />, <FaFacebook size={30} key="f" />].map((social, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-12 h-12 rounded-full flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-dark transition-all duration-300"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;