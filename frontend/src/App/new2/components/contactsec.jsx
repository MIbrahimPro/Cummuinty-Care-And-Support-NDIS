import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { siteData } from '../data/data';

const ContactSection = ({
    requestOnly = false,
    showtimes = !requestOnly,
    showMessage = true,
    customTitle = ""
}) => {
    // 1. State to handle form data
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Select Service",
        message: ""
    });

    // 2. Helper to update state on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Helper for Netlify Encoding
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    // 4. The Submit Logic
    const handleSubmit = (e) => {
        e.preventDefault();

        // Trigger a "Loading" toast that turns into Success or Error
        const submitPromise = fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact-form",
                ...formData
            })
        })
            .then(() => {
                // Reset form on success
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    service: "Select Service",
                    message: ""
                });
            });

        // This handles the cool animations automatically
        toast.promise(submitPromise, {
            loading: 'Sending your message...',
            success: <b>Message sent! We will contact you soon.</b>,
            error: <b>Could not send. Please try again.</b>,
        }, {
            style: {
                minWidth: '250px',
                fontFamily: 'Inter, sans-serif',
            },
            success: {
                duration: 5000,
                iconTheme: {
                    primary: '#06b6d4', // Matches your 'cyan' usage
                    secondary: '#fff',
                },
            },
        });
    };

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const displayTitle = customTitle || (requestOnly ? "Request a Call Back" : "Get in Touch");

    return (
        <section className={`py-20 px-6 font-inter ${showtimes ? 'bg-[#f0f0f0]' : 'bg-transparent'}`}>
            {/* This renders the notifications on top of the screen */}
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className={`mx-auto ${showtimes ? 'max-w-6xl flex flex-col md:flex-row gap-8' : 'max-w-4xl'}`}>

                <div className={`bg-white p-10 rounded-xl shadow-sm border border-gray-100 ${requestOnly ? 'text-center' : 'flex-grow'}`}>
                    <h2 className={`text-[32px] font-nohemi font-bold text-gray-900 mb-8`}>
                        {displayTitle}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 text-left"
                        data-netlify="true" // Required for Netlify
                        name="contact-form" // Required for Netlify
                    >
                        {/* Hidden input required for Netlify to recognize the form */}
                        <input type="hidden" name="form-name" value="contact-form" />

                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Name:</label>
                                <input
                                    type="text"
                                    name="name" // Distinct Name
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Phone:</label>
                                <input
                                    type="tel"
                                    name="phone" // Distinct Name
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                />
                            </div>

                            {requestOnly ? (
                                <div className="flex flex-col">
                                    <label className="text-[16px] mb-2 font-medium">How Can We Help?</label>
                                    <select
                                        name="service" // Distinct Name
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan appearance-none"
                                    >
                                        <option>Select Service</option>
                                        <option>SIL Support</option>
                                        <option>Community Access</option>
                                        <option>Household Tasks</option>
                                    </select>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <label className="text-[16px] mb-2 font-medium">Email:</label>
                                    <input
                                        type="email"
                                        name="email" // Distinct Name
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                    />
                                </div>
                            )}
                        </div>

                        {showMessage && (
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Message:</label>
                                <textarea
                                    name="message" // Distinct Name
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan resize-none"
                                ></textarea>
                            </div>
                        )}

                        <div className={requestOnly ? 'text-center pt-4' : 'pt-2'}>
                            <button
                                type="submit"
                                className="bg-cyan hover:opacity-90 text-white py-[15px] px-[60px] rounded-lg font-bold transition-all text-[18px]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {showtimes && (
                    <div className="w-full md:w-[400px] bg-white p-10 rounded-xl shadow-sm">
                        <h2 className="text-[32px] font-nohemi font-bold text-gray-900 mb-8">Contact Us</h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-[18px] text-gray-700">
                                    <span className="font-bold">T.</span> {siteData.phoneNumber}
                                </p>
                                <p className="text-[18px] text-gray-700">
                                    <span className="font-bold">A.</span> {siteData.Address}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[16px] font-bold uppercase tracking-wide mb-4 text-gray-900">Support Hours</h3>
                                <div className="space-y-2">
                                    {days.map((day) => (
                                        <div key={day} className="flex justify-between text-[16px] text-gray-600">
                                            <span>{day}</span>
                                            <span className="text-gray-900">Open 24 Hours</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactSection;