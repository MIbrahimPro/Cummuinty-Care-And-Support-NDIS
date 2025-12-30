// src/App/new/components/TestimonialCard.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, variant = "default" }) => {
    // variant: "default" | "featured" | "compact"

    const renderStars = () => {
        return (
            <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
            </div>
        );
    };

    if (variant === "featured") {
        return (
            <div className="bg-white p-8 lg:p-12 shadow-xl border-l-4 border-yellow-500 relative">
                <Quote size={48} className="text-yellow-500 opacity-20 absolute top-8 right-8" />

                <div className="flex items-start gap-6 mb-6">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500 shrink-0"
                    />
                    <div>
                        <h3 className="font-bold text-xl text-blue-950 mb-1">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                        {renderStars()}
                    </div>
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.fullTestimonial || testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm font-bold text-yellow-600 uppercase tracking-wider">
                        {testimonial.service}
                    </span>
                </div>
            </div>
        );
    }

    if (variant === "compact") {
        return (
            <div className="bg-gray-50 p-6 border-l-4 border-blue-950 hover:border-yellow-500 transition-colors">
                {renderStars()}
                <blockquote className="text-gray-700 leading-relaxed my-4 italic">
                    "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-bold text-blue-950 text-sm">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all group">
            <div className="mb-6">
                {renderStars()}
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform"
                />
                <div>
                    <h4 className="font-bold text-blue-950">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{testimonial.role}</p>
                    <p className="text-yellow-600 text-xs font-bold uppercase">{testimonial.service}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;