import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const heroRef = useRef(null);
    const storyRef = useRef(null);
    const valuesRef = useRef([]);
    const teamRef = useRef(null);

    const values = [
        {
            icon: '💙',
            title: 'Compassion',
            description: 'We lead with empathy and understanding in every interaction.',
        },
        {
            icon: '🤝',
            title: 'Respect',
            description: 'Dignity and respect are at the heart of everything we do.',
        },
        {
            icon: '⭐',
            title: 'Excellence',
            description: 'We strive for the highest quality in all our services.',
        },
        {
            icon: '🌟',
            title: 'Empowerment',
            description: 'We help you achieve independence and reach your goals.',
        },
        {
            icon: '🔄',
            title: 'Flexibility',
            description: 'Adaptable support that evolves with your changing needs.',
        },
        {
            icon: '🛡️',
            title: 'Integrity',
            description: 'Transparent, honest, and accountable in all we do.',
        },
    ];

    const stats = [
        { number: '500+', label: 'Happy Clients' },
        { number: '15+', label: 'Years Experience' },
        { number: '50+', label: 'Support Workers' },
        { number: '24/7', label: 'Available Support' },
    ];

    useEffect(() => {
        // Hero animation
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl.from(heroRef.current.querySelector('h1'), {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
        });
        heroTl.from(
            heroRef.current.querySelector('.hero-text'),
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
            },
            '-=0.5'
        );

        // Story section animation
        gsap.from(storyRef.current.querySelector('.story-image'), {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: storyRef.current,
                start: 'top 70%',
            },
        });

        gsap.from(storyRef.current.querySelector('.story-content'), {
            x: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: storyRef.current,
                start: 'top 70%',
            },
        });

        // Values animation
        valuesRef.current.forEach((card, index) => {
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
            });
        });

        // Stats animation
        gsap.from('.stat-item', {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden"
            >
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        About <span className="text-primary">CCnS</span>
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-dark/70 leading-relaxed max-w-3xl mx-auto">
                        Building a community where everyone has the opportunity to live their
                        best life with dignity, independence, and genuine support.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section ref={storyRef} className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="story-image">
                        <div className="relative rounded-3xl overflow-hidden aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
                        </div>
                    </div>

                    <div className="story-content space-y-6">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            Our <span className="text-primary">Story</span>
                        </h2>
                        <p className="text-lg text-dark/70 leading-relaxed">
                            Community Care and Support was founded with a simple yet powerful vision:
                            to create a world where every person, regardless of their abilities, has
                            access to quality care that empowers them to live life on their own terms.
                        </p>
                        <p className="text-lg text-dark/70 leading-relaxed">
                            For over 15 years, we've been dedicated to providing person-centered support
                            that goes beyond traditional care. We believe in building meaningful relationships,
                            fostering independence, and celebrating the unique strengths of every individual
                            we support.
                        </p>
                        <p className="text-lg text-dark/70 leading-relaxed">
                            As a registered NDIS provider, we're committed to upholding the highest
                            standards of quality, safety, and ethical practice. Our team of experienced
                            professionals brings not just expertise, but genuine compassion and dedication
                            to every interaction.
                        </p>

                        <div className="pt-6">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
                                <span className="text-2xl">🏆</span>
                                <span className="text-primary font-semibold">NDIS Registered Provider</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-item text-center p-8 bg-light/5 backdrop-blur-xl border border-primary/20 rounded-3xl hover:bg-primary/10 transition-all duration-300"
                            >
                                <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                                    {stat.number}
                                </h3>
                                <p className="text-light/70 text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-primary">Values</span>
                        </h2>
                        <p className="text-dark/60 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                ref={(el) => (valuesRef.current[index] = el)}
                                className="group bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-dark/70 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-light mb-8">
                        Our <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-light/80 text-xl leading-relaxed mb-12">
                        To empower individuals with disabilities to live fulfilling, independent lives
                        by providing compassionate, high-quality support services that honor their
                        choices, celebrate their strengths, and foster meaningful community connections.
                    </p>

                    <div className="bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-light mb-6">
                            Our Commitment to You
                        </h3>
                        <ul className="space-y-4 text-left max-w-2xl mx-auto">
                            {[
                                'Person-centered care tailored to your unique needs and goals',
                                'Experienced, qualified, and compassionate support workers',
                                'Transparent communication and collaborative decision-making',
                                'Continuous quality improvement and service excellence',
                                'Respect for your dignity, privacy, and independence',
                                'Support that adapts and grows with you',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-light/80">
                                    <span className="text-primary text-xl mt-1">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;