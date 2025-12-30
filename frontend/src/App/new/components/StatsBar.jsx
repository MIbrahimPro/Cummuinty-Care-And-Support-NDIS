// src/App/new/components/StatsBar.jsx
import React from 'react';

const StatsBar = ({ stats, variant = "light" }) => {
    const isDark = variant === "dark";

    return (
        <section className={`py-16 ${isDark ? 'bg-blue-950' : 'bg-yellow-500'}`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative">
                            <div className={`text-4xl lg:text-5xl font-bold mb-2 ${isDark ? 'text-yellow-400' : 'text-blue-950'}`}>
                                {stat.number}
                            </div>
                            <div className={`text-sm uppercase tracking-wider font-medium ${isDark ? 'text-gray-300' : 'text-blue-900'}`}>
                                {stat.label}
                            </div>
                            {index < stats.length - 1 && (
                                <div className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 ${isDark ? 'bg-blue-800' : 'bg-yellow-400'}`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;