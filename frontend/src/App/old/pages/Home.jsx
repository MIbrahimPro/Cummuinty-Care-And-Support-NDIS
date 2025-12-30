import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data/services';
import ContactUs from '../components/Contact';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const sectionRef = useRef(null);
    const marqueeRef = useRef(null);
    const servicesRef = useRef(null);
    const whyRef = useRef(null);
    const servicesContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            // 1. Hero Animation
            gsap.from(".hero-card", {
                opacity: 0,
                y: 60,
                x: (i) => (i % 2 === 0 ? -40 : 40),
                rotation: (i) => (i % 2 === 0 ? -2 : 2),
                duration: 1.4,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });

            // 2. Marquee Scrub
            gsap.to(marqueeRef.current, {
                xPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            /* ---------------- SERVICES (NEW MODEL) ---------------- */


            const cards = gsap.utils.toArray(".service-row");

            // Create a Master Timeline for the Services Section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top top",
                    end: `+=${cards.length * 150}%`, // Length of the scroll
                    pin: true,                      // Pins the section
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            cards.forEach((card, i) => {
                const isEven = i % 2 === 0;

                // Initial state: Off-screen at corners
                gsap.set(card, {
                    xPercent: isEven ? -150 : 150,
                    yPercent: 100,
                    rotation: isEven ? -20 : 20,
                    opacity: 0
                });

                // Animation Sequence
                tl.to(card, {
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                })
                    .to(card, {
                        // Empty tween creates the "Stay/Pause" effect during scroll
                        duration: 0.8
                    })
                    .to(card, {
                        xPercent: isEven ? 150 : -150,
                        yPercent: -100,
                        rotation: isEven ? 20 : -20,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.in"
                    });
            });

            /* ---------------- WHY CHOOSE US ---------------- */
            gsap.from(".why-card", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: whyRef.current,
                    start: "top 75%",
                },
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <div className="w-full bg-pale overflow-x-hidden">
            {/* HERO SECTION */}
            <section ref={sectionRef} className='mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row items-stretch justify-center p-5 md:p-12 lg:px-40 xl:px-64 gap-8 max-w-[2000px] mx-auto'>
                <div className='flex flex-col gap-8 w-full lg:w-1/2 flex-1'>
                    <div className='hero-card border border-primary-dark p-8 md:p-12 rounded-[2.5rem] bg-primary-light flex flex-col items-start justify-end gap-6 flex-[1]'>
                        <h2 className='text-3xl md:text-4xl font-bold text-dark'>Making Possibilities a Reality</h2>
                        <p className='text-lg md:text-xl font-medium text-dark/80'>From learning and lifestyle programs to rewarding work.</p>
                    </div>
                    <div className="hero-card border border-primary-dark rounded-[2.5rem] min-h-[350px] lg:min-h-0 w-full bg-primary-light bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/friends-having-fun-together_23-2149315647.jpg')] flex-[4]" />
                </div>
                <div className='flex flex-col-reverse lg:flex-col gap-8 w-full lg:w-1/2 flex-1'>
                    <div className="hero-card border border-primary-dark rounded-[2.5rem] min-h-[350px] lg:min-h-0 w-full bg-primary-light bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg')] flex-[4]" />
                    <div className='hero-card border border-primary-dark p-8 md:p-12 rounded-[2.5rem] bg-primary-light flex flex-col items-start justify-end gap-6 flex-[1]'>
                        <h2 className='text-3xl md:text-4xl font-bold text-dark'>Your Registered NDIS Providers Brisbane</h2>
                        <p className='text-lg md:text-xl font-medium text-dark/80'>Empowering Lives with Integrity, Compassion, and Excellence.</p>
                        <p className='text-lg md:text-xl font-medium text-dark/80'> As one of the leading registered NDIS providers Brisbane, our mission is to deliver personalised, high-quality support that empowers our clients to achieve their goals and aspirations. </p>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <section className="py-10 whitespace-nowrap overflow-hidden bg-pale">
                <h2 ref={marqueeRef} className="text-[15vw] font-black uppercase text-dark leading-none inline-block">
                    JOURNEY • OWN YOUR JOURNEY • OWN YOUR JOURNEY • OWN YOUR JOURNEY •
                </h2>
            </section>
            {/* SERVICES SECTION */}
            <section ref={servicesRef} className="relative w-full h-screen flex flex-col items-center bg-pale overflow-hidden">

                {/* 1. Heading: Fixed at the top with a specific height area */}
                <div className="w-full pt-24 pb-4 z-10">
                    <h3 className="text-5xl md:text-8xl text-center font-black uppercase tracking-tight">
                        Our Services
                    </h3>
                </div>

                {/* 2. Cards Container: Takes up the remaining vertical space */}
                <div className="relative w-full flex-1 flex items-center justify-center p-4 md:p-10 mb-10">
                    {servicesData.map((service, i) => (
                        <div
                            key={service.id}
                            className="service-row absolute w-[calc(100%-2rem)] max-w-5xl h-full max-h-[65vh] md:max-h-[70vh] flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-white border-2 border-primary-dark rounded-[2.5rem] p-6 md:p-12 shadow-2xl will-change-transform"
                        >
                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center relative h-1/2 md:h-full w-full">
                                <span className="md:block absolute font-bold text-primary text-2xl top-4">0{i + 1}</span>
                                <h4 className="text-2xl md:text-5xl font-bold leading-tight">
                                    {service.title}
                                </h4>
                                <p className="mt-2 md:mt-4 text-dark/70 text-base md:text-xl line-clamp-3 md:line-clamp-none">
                                    {service.description}
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full h-1/2 md:h-full rounded-3xl overflow-hidden shadow-inner">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* WHY CHOOSE US */}
            <section
                ref={whyRef}
                className="px-6 lg:px-32 py-32 bg-primary-light"
            >
                <h3 className="text-5xl md:text-7xl font-black mb-20">
                    Why Choose Us
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Human-Centric Care",
                            text: "Support designed around dignity, autonomy, and outcomes.",
                        },
                        {
                            title: "Experienced Team",
                            text: "Professionals who understand complex needs deeply.",
                        },
                        {
                            title: "Trust & Transparency",
                            text: "Clear communication with zero hidden complexity.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="why-card p-8 rounded-3xl border bg-white"
                        >
                            <h4 className="text-2xl font-bold mb-3">
                                {item.title}
                            </h4>
                            <p className="text-dark/70 text-lg">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default Home;