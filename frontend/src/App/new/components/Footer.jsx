import {
    Phone, Mail, MapPin, Facebook, ArrowRight
} from 'lucide-react';

export default function Footer(){
    return(
        <>
          {/* ================= 13. FOOTER ================= */}
            <footer className="bg-blue-950 text-gray-400 py-20 border-t-8 border-yellow-500">
                <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">About Us</h4>
                        <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
                        <p className="leading-relaxed mb-6">
                            We provide disability support services with 24/7 availability. We empower customers to choose and direct their support services.
                        </p>
                        <div className="inline-block border border-gray-600 p-3 text-center text-white font-bold text-xs uppercase rounded-none hover:border-yellow-500 transition-colors">
                            NDIS Registered <br /> Provider
                        </div>
                    </div>

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

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
                        <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin size={16} className="text-yellow-500 mt-1 shrink-0" />
                                <span>2/54 Kingston Road <br /> Underwood QLD 4119</span>
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
            </>
    )

}