
// Service Item (Card Style with Hover)
export default function ServiceItem({ title, icon, serviceKey }) {
    return (
        <div className="group flex flex-col items-center bg-gray-50 border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 rounded-none relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-yellow-500 transition-colors"></div>

            <div className="mb-6 text-blue-950 p-5 bg-white border border-gray-200 shadow-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="font-bold text-blue-950 group-hover:text-yellow-600 uppercase text-sm tracking-wide text-center mb-4 transition-colors">
                {title}
            </h3>
            <a
                href={`#contact?service=${serviceKey}`}
                className="text-xs font-bold text-gray-400 group-hover:text-blue-950 uppercase tracking-widest mt-auto border-b border-transparent group-hover:border-blue-950 transition-colors"
            >
                Enquire Now
            </a>
        </div>
    )
};
