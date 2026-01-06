import React from 'react';
import { siteData } from '../data/data';

/**
 * @param {boolean} requestOnly - If true, shows a centered card (like image_8725c6)
 * @param {boolean} showMessage - If false, hides the textarea (like image_8725ad)
 * @param {string} customTitle - Override the default "Get in Touch" or "Request a Call Back"
 */

const ContactSection = ({
    requestOnly = false,
    showMessage = true,
    customTitle = ""
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
    };

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Default Title Logic
    const displayTitle = customTitle || (requestOnly ? "Request a Call Back" : "Get in Touch");

    return (
        <section className={`py-20 px-6 font-inter ${requestOnly ? 'bg-transparent' : 'bg-[#f0f0f0]'}`}>
            <div className={`mx-auto ${requestOnly ? 'max-w-4xl' : 'max-w-6xl flex flex-col md:flex-row gap-8'}`}>

                {/* Main Form Card */}
                <div className={`bg-white p-10 rounded-xl shadow-sm border border-gray-100 ${requestOnly ? 'text-center' : 'flex-grow'}`}>
                    <h2 className={`text-[32px] font-nohemi font-bold text-gray-900 mb-8`}>
                        {displayTitle}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div className={`grid grid-cols-1 ${requestOnly ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Name:</label>
                                <input
                                    type="text"
                                    required
                                    className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                />
                            </div>

                            {/* Conditional Phone Field: Moves position based on layout */}
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Phone:</label>
                                <input
                                    type="tel"
                                    required
                                    className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                />
                            </div>

                            {/* Conditional Logic for the 3rd column in Request Mode */}
                            {requestOnly ? (
                                <div className="flex flex-col">
                                    <label className="text-[16px] mb-2 font-medium">How Can We Help?</label>
                                    <select className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan appearance-none">
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
                                        required
                                        className="bg-[#ebebeb] p-3 rounded-md outline-none focus:ring-1 focus:ring-cyan"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Optional Message Box */}
                        {showMessage && (
                            <div className="flex flex-col">
                                <label className="text-[16px] mb-2 font-medium">Message:</label>
                                <textarea
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

                {/* Right Side: Contact Info Card (Hidden in Request Only Mode) */}
                {!requestOnly && (
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