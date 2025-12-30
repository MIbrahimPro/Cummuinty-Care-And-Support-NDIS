// src/App/new/components/TestimonialBlock.jsx
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialBlock = ({ testimonial }) => {
    return (
        <section className="py-24 bg-blue-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Quote Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-8">
                        <Quote size={40} className="text-blue-950" />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-10 italic">
                        "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                        {testimonial.image && (
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full object-cover border-4 border-yellow-500"
                            />
                        )}
                        <div className="text-left">
                            <div className="text-white font-bold text-lg">{testimonial.author}</div>
                            <div className="text-yellow-500 text-sm uppercase tracking-wider">{testimonial.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialBlock;