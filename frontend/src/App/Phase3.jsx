import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Menu, X, 
  Plus, Minus, Facebook, Users, Home, 
  Activity, Heart, CheckSquare, Car, ArrowRight 
} from 'lucide-react';

// --- Assets & Data ---

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Nurse helping patient
    title: "KNOW WE ARE HERE",
    subtitle: "We are here so that people with disabilities and their families have somewhere to turn."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Wheelchair outdoors
    title: "EMPOWERING INDEPENDENCE",
    subtitle: "Our top priority is to maximise your independence and well-being in the community."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Community group
    title: "YOUR TRUSTED PARTNER",
    subtitle: "Professional, compassionate care tailored specifically to your unique needs."
  }
];

export default function CommunityCare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- Theme Colors ---
  // Navy: bg-blue-950 (#172554)
  // Mustard: text-yellow-600 (#CA8A04) / bg-yellow-500 (#EAB308)

  return (
    <div className="font-sans text-gray-600 antialiased bg-white">
      
      {/* ================= 1. TOP BAR ================= */}
      <div className="bg-blue-950 text-white text-sm py-3 border-b border-blue-900">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <a href="tel:1300983885" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone size={14} className="fill-current" />
              <span className="font-medium">AH : 1300 983 885</span>
            </a>
            <a href="mailto:info@communitycare.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail size={14} className="fill-current" />
              <span className="font-medium">info@communitycare.com.au</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={14} className="fill-current" />
            <span className="font-medium">2/54 Kingston Road Underwood QLD 4119</span>
          </div>
        </div>
      </div>

      {/* ================= 2. NAVBAR ================= */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white w-12 h-12 flex items-center justify-center font-bold text-2xl rounded-none shadow-sm">
               CC
             </div>
             <div className="leading-tight">
               <h1 className="text-xl font-extrabold text-blue-950 uppercase tracking-tighter">Community Care</h1>
               <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest block">And Services</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 items-center font-bold text-sm uppercase text-blue-950 tracking-wide">
            {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="hover:text-yellow-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-blue-950 p-2 border border-gray-200 rounded-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
            {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="block py-4 px-6 text-blue-950 font-bold uppercase border-b border-gray-50 hover:bg-gray-50 hover:text-yellow-600">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ================= 3. HERO CAROUSEL ================= */}
      <section className="relative h-[600px] bg-blue-950 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image */}
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            
            {/* Gradient Overlay (Navy to Light Blue tint) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-sky-500/30 mix-blend-multiply"></div>
            
            {/* Text Content */}
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

      {/* ================= 5. WELCOME SECTION (Toggle List 1 - LTR) ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="h-full min-h-[400px] relative group">
             <div className="absolute top-4 -left-4 w-full h-full border-4 border-yellow-500 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Welcome" 
               className="w-full h-full object-cover relative z-10 shadow-xl rounded-none grayscale group-hover:grayscale-0 transition-all duration-500"
             />
          </div>

          {/* Right: Content */}
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

      {/* ================= 6. SERVICES SECTION (Updated Background) ================= */}
      <section className="py-24 relative bg-white overflow-hidden">
        
        {/* --- BACKGROUND LAYERS --- */}
        
        {/* Layer 1: World Map (25% Opacity) */}
        <div 
          className="absolute inset-0 z-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'url("https://www.nicepng.com/png/full/225-2250557_world-world-map-black-and-grey-poster-36.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Layer 2: Dotted Matrix (Overlay) */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', // Tailwind gray-300 dots
            backgroundSize: '24px 24px' // Spacing of dots
          }}
        ></div>
        
        {/* --- CONTENT --- */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItem title="Life Stage Transition" icon={<Users size={40} />} />
            <ServiceItem title="Household Tasks" icon={<Home size={40} />} />
            <ServiceItem title="Community Participation" icon={<Activity size={40} />} />
            <ServiceItem title="Development Life Skills" icon={<CheckSquare size={40} />} />
            <ServiceItem title="Personal Activities" icon={<Heart size={40} />} />
            <ServiceItem title="Travel Assistance" icon={<Car size={40} />} />
          </div>
        </div>
      </section>

      {/* ================= 7. TOGGLE SECTION 1 (Text Left / Image Right) ================= */}
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

      {/* ================= 8. TOGGLE SECTION 2 (Image Left / Text Right) ================= */}
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

      {/* ================= 9. TOGGLE SECTION 3 (Text Left / Image Right - Steps) ================= */}
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

      {/* ================= 10. CTA STRIP ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-800 text-center text-white relative overflow-hidden">
        {/* Decorative Overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase">
            Make your life easier with <span className="text-yellow-400">Us</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-200 text-lg">
            Our top priority is to maximise your independence and well-being. Meet with your carers today.
          </p>
          <button className="bg-yellow-500 hover:bg-white hover:text-blue-950 text-blue-950 font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* ================= 11. MAP ================= */}
      <div className="h-96 w-full bg-gray-200 border-t-8 border-white">
        <iframe 
          src="https://maps.google.com/maps?q=2%2F54%20Kingston%20Road%20Underwood%20QLD%204119&t=m&z=10&output=embed&iwloc=near"
          title="Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      {/* ================= 12. FOOTER ================= */}
      <footer className="bg-blue-950 text-gray-400 py-20 border-t-8 border-yellow-500">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          
          {/* About */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">About Us</h4>
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <p className="leading-relaxed mb-6">
              We provide disability support services with 24/7 availability. We empower customers to choose and direct their support services.
            </p>
            <div className="inline-block border border-gray-600 p-3 text-center text-white font-bold text-xs uppercase rounded-none hover:border-yellow-500 transition-colors">
              NDIS Registered <br/> Provider
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-yellow-500 transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 text-yellow-600 group-hover:translate-x-1 transition-transform" /> 
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Opening Hours</h4>
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-blue-900 pb-2">
                <span>Mon - Fri</span> <span className="text-white">9:00AM - 5:00PM</span>
              </li>
              <li className="flex justify-between border-b border-blue-900 pb-2 text-yellow-600">
                <span>Saturday</span> <span>Closed</span>
              </li>
              <li className="flex justify-between border-b border-blue-900 pb-2 text-yellow-600">
                <span>Sunday</span> <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-yellow-500 mt-1 shrink-0" />
                <span>2/54 Kingston Road <br/> Underwood QLD 4119</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-yellow-500 mt-1 shrink-0" />
                <span>AH: 1300 983 885</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-yellow-500 mt-1 shrink-0" />
                <span>info@communitycare.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 hover:bg-yellow-500 hover:text-blue-950 text-white transition-colors rounded-none shadow-md">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>
        <div className="text-center mt-16 pt-8 border-t border-blue-900 text-xs text-gray-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Community Care And Services. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

// ================= SUB-COMPONENTS =================

// Service Item (Card Style with Hover)
const ServiceItem = ({ title, icon }) => (
  <div className="group flex flex-col items-center bg-gray-50 border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 rounded-none relative overflow-hidden">
    {/* Hover top border */}
    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-yellow-500 transition-colors"></div>
    
    <div className="mb-6 text-blue-950 p-5 bg-white border border-gray-200 shadow-sm rounded-full group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="font-bold text-blue-950 group-hover:text-yellow-600 uppercase text-sm tracking-wide text-center mb-4 transition-colors">
      {title}
    </h3>
    <a href="#" className="text-xs font-bold text-gray-400 group-hover:text-blue-950 uppercase tracking-widest mt-auto border-b border-transparent group-hover:border-blue-950 transition-colors">
      Read More
    </a>
  </div>
);

// Reusable Toggle/Accordion Section
const ToggleSection = ({ layout, title, subtitle, description, imageSrc, items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Layout logic: 'right' means text is on the right, image on left.
  const isRightLayout = layout === 'right';

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Content Column */}
        <div className={`order-2 ${isRightLayout ? 'lg:order-2' : 'lg:order-1'}`}>
          <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">{subtitle}</h4>
          <h3 className="text-3xl font-bold text-blue-950 mb-6 uppercase">{title}</h3>
          <p className="mb-8 text-gray-600 leading-relaxed text-lg">{description}</p>

          <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-none bg-white">
                <button 
                  onClick={() => toggle(idx)}
                  className={`w-full flex justify-between items-center p-5 text-left font-bold text-sm uppercase tracking-wide transition-all ${
                    openIndex === idx ? 'bg-blue-950 text-white shadow-md' : 'bg-gray-50 text-blue-950 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-1 border ${openIndex === idx ? 'border-white' : 'border-blue-950'} rounded-none`}>
                      {openIndex === idx ? <Minus size={10} /> : <Plus size={10} />}
                    </div>
                    {item.title}
                  </div>
                </button>
                
                {openIndex === idx && (
                  <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100 bg-white animate-fadeIn">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className={`order-1 ${isRightLayout ? 'lg:order-1' : 'lg:order-2'} relative h-full min-h-[500px] group`}>
           <div className={`absolute top-6 ${isRightLayout ? '-left-6' : '-right-6'} w-full h-full border-4 border-gray-100 z-0 transition-all group-hover:border-yellow-500`}></div>
           <img 
             src={imageSrc} 
             alt={title} 
             className="w-full h-full object-cover relative z-10 shadow-lg rounded-none grayscale group-hover:grayscale-0 transition-all duration-700"
           />
        </div>

      </div>
    </section>
  );
};