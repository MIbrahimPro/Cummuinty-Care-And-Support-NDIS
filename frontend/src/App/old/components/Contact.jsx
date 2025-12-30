import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
    const formRef = useRef(null);
    const [selectedService, setSelectedService] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const services = ["Personal Care", "Social Support", "Life Skills", "Work Prep"];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-field", {
                opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: formRef.current, start: "top 80%" }
            });
        });
        return () => ctx.revert();
    }, []);

    const inputClass = "peer w-full bg-transparent border-b border-dark/30 py-4 outline-none transition-colors focus:border-primary placeholder-transparent text-lg";
    // This label logic ensures it stays up if text is present
    const labelClass = "absolute left-0 top-4 text-dark/50 uppercase font-bold text-sm transition-all \
                        peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 \
                        peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs \
                        peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs";

    return (
        <section ref={formRef} className="px-6 lg:px-32 py-32 bg-pale">
            <div className="max-w-6xl mx-auto bg-white border-2 border-primary-dark rounded-[2.5rem] p-8 md:p-20 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-5xl md:text-8xl font-black leading-tight mb-8">Ready to <br />Start?</h3>
                        <p className="text-xl text-dark/70 max-w-sm">Empowering your journey begins with a single conversation.</p>
                    </div>

                    <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-field relative">
                            <input type="text" id="name" className={inputClass} placeholder="Full Name" required />
                            <label htmlFor="name" className={labelClass}>Full Name*</label>
                        </div>

                        <div className="contact-field relative">
                            <input type="email" id="email" className={inputClass} placeholder="Email" required />
                            <label htmlFor="email" className={labelClass}>Email Address*</label>
                        </div>

                        {/* Custom Dropdown */}
                        <div className="contact-field relative">
                            <div
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full border-b border-dark/30 py-4 cursor-pointer flex justify-between items-center"
                            >
                                <span className={`text-lg ${selectedService ? 'text-dark' : 'text-transparent'}`}>
                                    {selectedService || "Placeholder"}
                                </span>
                                <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                            {/* Persistent Label for Dropdown */}
                            <label className={`absolute left-0 transition-all uppercase font-bold \
                                ${selectedService || isDropdownOpen ? '-top-4 text-xs text-primary' : 'top-4 text-lg text-dark/50'}`}>
                                Select Service
                            </label>

                            {isDropdownOpen && (
                                <div className="absolute z-50 w-full mt-2 bg-white border border-primary-dark rounded-2xl shadow-2xl overflow-hidden">
                                    {services.map((s) => (
                                        <div
                                            key={s}
                                            className="px-6 py-4 hover:bg-primary-light cursor-pointer transition-colors"
                                            onClick={() => { setSelectedService(s); setIsDropdownOpen(false); }}
                                        >
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="contact-field relative">
                            <textarea id="message" rows="1" className={inputClass} placeholder="Message" required></textarea>
                            <label htmlFor="message" className={labelClass}>Message*</label>
                        </div>

                        <button className="contact-field w-full md:w-max px-12 py-5 bg-dark text-white rounded-full font-bold text-lg hover:bg-primary transition-all self-end">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;