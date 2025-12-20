import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ContactForm from '../components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom green marker
const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Contact = () => {
    const heroRef = useRef(null);
    const infoCardsRef = useRef([]);
    const mapRef = useRef(null);
    const formRef = useRef(null);

    // Melbourne coordinates (replace with actual address)
    const position = [-37.8136, 144.9631];

    const contactInfo = [
        {
            icon: '📞',
            title: 'Phone',
            details: ['1300 XXX XXX', '(Mon - Fri, 9AM - 5PM)'],
            link: 'tel:1300XXXXXX',
        },
        {
            icon: '📧',
            title: 'Email',
            details: ['contact@ccns.com.au', 'We reply within 24 hours'],
            link: 'mailto:contact@ccns.com.au',
        },
        {
            icon: '📍',
            title: 'Address',
            details: ['123 Care Street', 'Melbourne, VIC 3000'],
            link: '#map',
        },
        {
            icon: '🕐',
            title: 'Business Hours',
            details: ['Monday - Friday: 9AM - 5PM', 'Weekend: By Appointment'],
            link: null,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

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

        // Info cards animation
        infoCardsRef.current.forEach((card, index) => {
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

        // Map animation
        gsap.from(mapRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: mapRef.current,
                start: 'top 80%',
            },
        });

        // Form animation
        gsap.from(formRef.current, {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: formRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden"
            >
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-dark/70 leading-relaxed max-w-3xl mx-auto">
                        We're here to help. Reach out to us and let's discuss how we can
                        support you on your journey.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                ref={(el) => (infoCardsRef.current[index] = el)}
                                className={`group bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 ${info.link ? 'cursor-pointer' : ''
                                    }`}
                                onClick={() => info.link && window.location.href !== info.link && (window.location.href = info.link)}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p
                                        key={idx}
                                        className={`text-dark/70 ${idx === 0 ? 'font-semibold' : 'text-sm'}`}
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="map" className="py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
                            Find <span className="text-primary">Us</span>
                        </h2>
                        <p className="text-light/60 text-lg">
                            Visit us at our Melbourne office or contact us for home visits
                        </p>
                    </div>

                    <div
                        ref={mapRef}
                        className="rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl"
                        style={{ height: '500px' }}
                    >
                        <MapContainer
                            center={position}
                            zoom={15}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            />
                            <Marker position={position} icon={customIcon}>
                                <Popup>
                                    <div className="text-center p-2">
                                        <h3 className="font-bold text-primary mb-2">CCnS Office</h3>
                                        <p className="text-sm text-dark/70">Community Care and Support</p>
                                        <p className="text-sm text-dark/70">123 Care Street</p>
                                        <p className="text-sm text-dark/70">Melbourne, VIC 3000</p>
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-3 text-primary font-semibold text-sm hover:underline"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    {/* Map Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-light/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">🚗</div>
                            <h4 className="text-light font-semibold mb-2">Parking Available</h4>
                            <p className="text-light/60 text-sm">Free parking on-site</p>
                        </div>
                        <div className="bg-light/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">♿</div>
                            <h4 className="text-light font-semibold mb-2">Wheelchair Access</h4>
                            <p className="text-light/60 text-sm">Fully accessible facility</p>
                        </div>
                        <div className="bg-light/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">🚌</div>
                            <h4 className="text-light font-semibold mb-2">Public Transport</h4>
                            <p className="text-light/60 text-sm">Close to tram & bus stops</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div
                        ref={formRef}
                        className="bg-light/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Send Us a <span className="text-primary">Message</span>
                            </h2>
                            <p className="text-dark/60 text-lg">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <ContactForm showServiceSelect={true} />
                    </div>
                </div>
            </section>

            {/* Emergency Section */}
            <section className="py-24 px-6 md:px-12 bg-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-3xl p-12">
                        <div className="text-6xl mb-6">🚨</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
                            Need Immediate Assistance?
                        </h2>
                        <p className="text-light/70 text-lg mb-8">
                            For urgent support or emergencies, please contact:
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <a
                                href="tel:000"
                                className="group px-8 py-4 bg-light text-dark rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
                            >
                                <span>Emergency Services</span>
                                <span className="text-2xl">000</span>
                            </a>
                            <a
                                href="tel:1800800110"
                                className="group px-8 py-4 bg-primary text-light rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 inline-flex items-center justify-center gap-3"
                            >
                                <span>NDIS Support</span>
                                <span className="text-xl">1800 800 110</span>
                            </a>
                        </div>
                        <p className="text-light/50 text-sm mt-6">
                            Available 24/7 for immediate assistance
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Quick Links */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Have <span className="text-primary">Questions?</span>
                    </h2>
                    <p className="text-dark/60 text-lg mb-8">
                        Check out our FAQ section for quick answers to common questions
                    </p>
                    <a
                        href="/#faq"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-light rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                    >
                        <span>View FAQs</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;