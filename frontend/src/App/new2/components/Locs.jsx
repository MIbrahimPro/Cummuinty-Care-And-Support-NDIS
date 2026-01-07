import React from 'react';
import { Link } from 'react-router-dom';

const Locs = ({ locationsData, exclude = [], heading }) => {
    const filteredLocations = locationsData.filter(
        (location) => !exclude.includes(location.title)
    );

    if (filteredLocations.length === 0) {
        return null;
    }

    return (
        <section className="bg-[#f5f5f5] w-full px-4 py-40">
            <div className="max-w-5xl mx-auto">
                {heading && (
                    <div className="text-center mb-12">
                         <h2 className="text-5xl font-nohemi font-bold text-gray-900">{heading}</h2>
                    </div>
                )}

                {/* Locations Grid: 25px gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[25px]">
                    {filteredLocations.map((location) => (
                        <Link to={`/locations/${location.id}`} key={location.id}>
                            <div
                                className="bg-white p-[25px] rounded-[15px] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                            >
                                {/* Image: 180px height */}
                                <div className="w-full h-[180px] overflow-hidden rounded-[10px] mb-6">
                                    <img
                                        src={location.image}
                                        alt={location.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Card Footer: Title and Arrow */}
                                <div className="flex items-center justify-between mt-auto">
                                    <h3 className="text-[28px] font-nohemi font-bold text-gray-900">
                                        {location.title}
                                    </h3>

                                    {/* Cyan Arrow Circle */}
                                    <div className="w-[45px] h-[45px] bg-cyan rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locs;
