
import {
    Phone, Mail, MapPin
} from 'lucide-react';


export default function Topbar() {
    return (
        <>
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

        </>
    )
}