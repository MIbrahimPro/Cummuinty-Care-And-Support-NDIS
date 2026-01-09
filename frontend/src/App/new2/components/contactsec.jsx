import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { siteData, servicesData } from '../data/data';

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

    // 3. The Submit Logic (Web3Forms API)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data for Web3Forms
        const submissionData = new FormData();
        submissionData.append("access_key", "69101859-4381-403e-9863-fcee0e7365b7");

        // Add all fields from state, conditionally handling the service
        Object.keys(formData).forEach(key => {
            if (key === 'service' && formData[key] === 'Select Service') {
                submissionData.append(key, ''); // Send empty if not selected
            } else {
                submissionData.append(key, formData[key]);
            }
        });

        const submitPromise = fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: submissionData
        }).then(async (res) => {
            const result = await res.json();
            if (result.success) {
                // Reset form on success
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    service: "Select Service",
                    message: ""
                });
                return result;
            } else {
                throw new Error(result.message || "Failed to send");
            }
        });

        // Beautiful Toast Notifications
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
                    primary: '#06b6d4',
                    secondary: '#fff',
                },
            },
        });
    };

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const displayTitle = customTitle || (requestOnly ? "Request a Call Back" : "Get in Touch");

    return (
        <section className={`py-20 px-6 font-inter ${showtimes ? 'bg-[#f0f0f0]' : 'bg-transparent'}`}>
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className={`mx-auto ${showtimes ? 'max-w-6xl flex flex-col md:flex-row gap-8' : 'max-w-4xl'}`}>

                <div className={`bg-white p-10 rounded-xl shadow-sm border border-gray-100 ${requestOnly ? 'text-center' : 'flex-grow'}`}>
                    <h2 className={`text-[32px] font-nohemi font-bold text-gray-900 mb-8`}>
                        {displayTitle}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Name:</label>
                                <input
                                    type="text"
                                    name="name"
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
                                    name="phone"
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
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan appearance-none"
                                    >
                                        <option value="Select Service">Select Service</option>
                                        {servicesData.map(service => (
                                            <option key={service.id} value={service.title}>{service.title}</option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <label className="text-[16px] mb-2 font-medium">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
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
                                    name="message"
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