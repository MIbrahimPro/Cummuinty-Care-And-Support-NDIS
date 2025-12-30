// src/App/new/components/PageHero.jsx
import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageHero = ({
    title,
    subtitle,
    tagline,
    breadcrumbs = [],
    backgroundImage,
    size = "default" // "small" | "default" | "large"
}) => {
    const heights = {
        small: "py-20",
        default: "py-28",
        large: "py-36"
    };

    return (
        <section className={`relative ${heights[size]} bg-blue-950 overflow-hidden`}>
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/80"></div>

            {/* Decorative Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {breadcrumbs.length > 0 && (
                    <div className="mb-6">
                        <Breadcrumb items={breadcrumbs} />
                    </div>
                )}

                {tagline && (
                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">
                        {tagline}
                    </h4>
                )}

                <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase mb-6">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-xl text-gray-300 max-w-3xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;