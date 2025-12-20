import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const brandText = "CCnS";
    const marqueeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // "Out of the ground" letter animation
            gsap.from(".char", {
                y: "110%",
                stagger: 0.05,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {

        const ctx = gsap.context(() => {
            // 1. Reveal Animation for Footer Content
            gsap.from(".footer-column", {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                }
            });

            // 2. Slow Auto-Marquee
            gsap.to(marqueeRef.current, {
                xPercent: -20,
                ease: "none",
                duration: 10,
                repeat: -1,
                yoyo: true,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative bg-pale pt-20 overflow-hidden z-200"
        >
            {/* Design Element: Top Curved Edge to match Hero/Service cards */}
            <div className="bg-primary-light rounded-t-[3rem] md:rounded-t-[5rem] border-t border-primary-dark px-6 lg:px-32 pt-20 pb-10 flex flex-col justify-start items-start gap-24">
                {/* Brand Column */}
                <div className="overflow-hidden flex w-full">
                    {brandText.split("").map((char, i) => (
                        <span key={i} className="char inline-block text-[15vw] font-black leading-none tracking-tighter text-dark">
                            {char}
                        </span>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 w-full">


                    {/* Quick Links */}
                    <div className="footer-column flex flex-col gap-4">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Quick Links</h4>
                        {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="text-dark/60 hover:text-primary transition-colors text-lg">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Services Brief */}
                    <div className="footer-column flex flex-col gap-4">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Our Services</h4>
                        {['Personal Care', 'Social Support', 'Life Skills', 'Work Prep'].map((item) => (
                            <span key={item} className="text-dark/60 text-lg">{item}</span>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column flex flex-col gap-4">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Get In Touch</h4>
                        <div className="p-6 bg-white border border-primary-dark rounded-3xl">
                            <p className="font-bold text-dark">Brisbane, QLD</p>
                            <p className="text-primary font-medium mt-1">hello@ccns.com.au</p>
                            <button className="mt-4 w-full py-3 bg-dark text-white rounded-full font-bold hover:bg-primary transition-all">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Marquee Design Element */}
                <div className="border-t border-dark/10 pt-10 overflow-hidden whitespace-nowrap">
                    <h3
                        ref={marqueeRef}
                        className="text-[8vw] font-black uppercase text-dark/5 leading-none select-none"
                    >
                        INTEGRITY • COMPASSION • EXCELLENCE • INTEGRITY • COMPASSION •
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-dark/40 text-sm">
                    <p>© 2025 CCnS. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;