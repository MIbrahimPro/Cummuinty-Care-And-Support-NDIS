import { useEffect, useState } from 'react';
import {
    Phone, Mail, MapPin, Menu, X, Home,
    Plus, Minus, Facebook, Users,
    Activity, Heart, CheckSquare, Car, ArrowRight,
    Send, Clock, ChevronDown
} from 'lucide-react';
import { HERO_SLIDES } from '../data/Data.js'
import ServiceItem from '../components/Service Card.jsx';
import ToggleSection from '../components/Toggle.jsx';
import ContactForm from '../components/Contact.jsx';
import StyledMap from '../components/Map.jsx';


// ================= HOME PAGE COMPONENT =================
export default function CommunityCare() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans text-gray-600 antialiased bg-white">

            {/* ================= 3. HERO CAROUSEL ================= */}
            <section className="relative h-[600px] bg-blue-950 overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-sky-500/30 mix-blend-multiply"></div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-4 lg:px-8">
                                <div className="max-w-3xl animate-fadeInUp">
                                    <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase drop-shadow-md">
                                        {slide.title.split(" ").slice(0, -1).join(" ")} <span className="text-yellow-400">{slide.title.split(" ").slice(-1)}</span>
                                    </h1>
                                    <p className="text-lg lg:text-2xl text-white mb-10 opacity-95 font-light leading-relaxed border-l-4 border-yellow-500 pl-6">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-wrap gap-4 pl-6">
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                                            Read More
                                        </button>
                                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-950 text-white font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ================= 4. VALUES STRIP ================= */}
            <section className="bg-white border-b-4 border-yellow-500 relative z-20 shadow-2xl -mt-10 mx-4 lg:mx-auto lg:max-w-6xl p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-950 mb-2 uppercase">We are built upon our values of:</h2>
                        <div className="text-gray-600 font-medium tracking-wide text-lg">
                            Dignity <span className="text-yellow-500 px-2">•</span>
                            Respect <span className="text-yellow-500 px-2">•</span>
                            Inclusiveness <span className="text-yellow-500 px-2">•</span>
                            Responsibility
                        </div>
                    </div>
                    <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-colors shadow-lg whitespace-nowrap">
                        Start Today
                    </button>
                </div>
            </section>

            {/* ================= 5. WELCOME SECTION ================= */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="h-full min-h-[400px] relative group">
                        <div className="absolute top-4 -left-4 w-full h-full border-4 border-yellow-500 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Welcome"
                            className="w-full h-full object-cover relative z-10 shadow-xl rounded-none grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div>
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                        <h2 className="text-4xl font-bold text-blue-950 mb-6 uppercase">
                            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-500">Community Care</span>
                        </h2>
                        <p className="mb-8 leading-relaxed text-lg">
                            We are one of the best disability services with a positive track record. We offer a wide range of disability support services to individuals with the utmost care.
                        </p>

                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Help with life stage transitions",
                                "Household tasks & maintenance",
                                "Innovative Community participation",
                                "Travel & Transport assistance",
                                "Development of life skills"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 p-3 bg-white border-l-4 border-blue-950 shadow-sm hover:border-yellow-500 transition-colors">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-none shrink-0"></div>
                                    <span className="font-bold text-blue-950 uppercase text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= 6. SERVICES SECTION ================= */}
            <section className="py-24 relative bg-white overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-25 pointer-events-none"
                    style={{
                        backgroundImage: 'url("https://www.nicepng.com/png/full/225-2250557_world-world-map-black-and-grey-poster-36.png")',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                ></div>

                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}
                ></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceItem title="Life Stage Transition" icon={<Users size={40} />} serviceKey="life-stage-transition" />
                        <ServiceItem title="Household Tasks" icon={<Home size={40} />} serviceKey="household-tasks" />
                        <ServiceItem title="Community Participation" icon={<Activity size={40} />} serviceKey="community-participation" />
                        <ServiceItem title="Development Life Skills" icon={<CheckSquare size={40} />} serviceKey="development-life-skills" />
                        <ServiceItem title="Personal Activities" icon={<Heart size={40} />} serviceKey="personal-activities" />
                        <ServiceItem title="Travel Assistance" icon={<Car size={40} />} serviceKey="travel-assistance" />
                    </div>
                </div>
            </section>

            {/* ================= 7. TOGGLE SECTION 1 ================= */}
            <ToggleSection
                layout="left"
                id="benefits"
                title="Advantages of Professional Support"
                subtitle="BENEFITS"
                description="Individuals living with disabilities may find it difficult to address their daily duties. Professional support services act as a lifeline."
                imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                items={[
                    { title: "Exceptionally Skilled Carers", content: "Our professional carers provide better support with laundry, cleaning, and preparing meals than regular family caregivers." },
                    { title: "Maximising Independence", content: "We teach daily activities like bathing and cooking for yourself instead of relying on others." },
                    { title: "Upskilling", content: "Learning new life skills enables you to live independently with the help of expert carers." },
                    { title: "Rest for Family Carers", content: "Opting for services offers family carers a break from their regular caregiving job." }
                ]}
            />

            {/* ================= 8. TOGGLE SECTION 2 ================= */}
            <ToggleSection
                layout="right"
                id="why-us"
                title="What Makes Us The Best?"
                subtitle="WHY CHOOSE US"
                description="Brisbane is a giant city where you can find several disability support services right next door. Selecting the right one is key."
                imageSrc="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                items={[
                    { title: "Experienced", content: "We have years of experience. Dealing with experienced support services allows you to obtain the most out of your care." },
                    { title: "We are a one-stop solution", content: "We provide a wide range of services, allowing you to affix with us instead of changing your provider every time." },
                    { title: "Meet your needs", content: "Passion and integrity help us understand and meet your needs perfectly." }
                ]}
            />

            {/* ================= 9. TOGGLE SECTION 3 ================= */}
            <ToggleSection
                layout="left"
                id="steps"
                title="What's on your mind?"
                subtitle="GET STARTED"
                description="If you find yourself in need of services, we advise you to speak with us before making the final decision."
                imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                items={[
                    { title: "Step One: Chat", content: "Let's have a quick chat via phone to get answers to all your queries." },
                    { title: "Step Two: Meet", content: "We meet physically to discover your goals and understand you better." },
                    { title: "Step Three: Relax", content: "Once you opt for services with us, we make sure you live the life you deserve." }
                ]}
            />

            {/* ================= 10. CONTACT FORM SECTION ================= */}
            <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-transparent to-blue-950/50"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Side - Info */}
                        <div className="text-white">
                            <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h4>
                            <h2 className="text-4xl lg:text-5xl font-bold uppercase mb-6">
                                Let's Start a <span className="text-yellow-400">Conversation</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Ready to take the first step towards better support? We're here to answer your questions and help you find the right services for your needs.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 p-5 bg-blue-900/50 border border-blue-800 hover:border-yellow-500 transition-colors">
                                    <div className="bg-yellow-500 p-4 shrink-0">
                                        <Phone size={24} className="text-blue-950" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm mb-1">Call Us</h4>
                                        <a href="tel:1300983885" className="text-xl text-yellow-400 hover:text-yellow-300 transition-colors">
                                            1300 983 885
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 p-5 bg-blue-900/50 border border-blue-800 hover:border-yellow-500 transition-colors">
                                    <div className="bg-yellow-500 p-4 shrink-0">
                                        <Mail size={24} className="text-blue-950" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm mb-1">Email Us</h4>
                                        <a href="mailto:info@communitycare.com.au" className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors">
                                            info@communitycare.com.au
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 p-5 bg-blue-900/50 border border-blue-800 hover:border-yellow-500 transition-colors">
                                    <div className="bg-yellow-500 p-4 shrink-0">
                                        <MapPin size={24} className="text-blue-950" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm mb-1">Visit Us</h4>
                                        <p className="text-gray-300">
                                            2/54 Kingston Road, Underwood QLD 4119
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-white p-8 lg:p-10 shadow-2xl">
                            <ContactForm variant="default" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= 11. CTA STRIP ================= */}
            <section className="py-20 bg-yellow-500 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#172554 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase text-blue-950">
                        Make your life easier with <span className="text-white">Us</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mb-10 text-blue-900 text-lg">
                        Our top priority is to maximise your independence and well-being. Meet with your carers today.
                    </p>
                    <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl hover:-translate-y-1">
                        Get Started Now
                    </button>
                </div>
            </section>

            {/* ================= 12. STYLED MAP ================= */}
            <StyledMap />


        </div>
    );
}