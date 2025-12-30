// src/App/new/pages/AboutUs.jsx
import React from 'react';
import {
    Heart, Users, Activity, CheckSquare, Award,
    Clock, Target, Shield, ArrowRight, Phone
} from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import TeamCard from '../components/TeamCard';
import TestimonialCard from '../components/TestimonialCard';
import {
    TEAM_DATA,
    COMPANY_STATS,
    COMPANY_VALUES,
    WHY_CHOOSE_US,
    TESTIMONIALS_DATA
} from '../data/Data';

const iconMap = {
    Heart,
    Users,
    Activity,
    CheckSquare,
    Award,
    Clock,
    Target,
    Shield
};

const AboutUsPage = () => {
    const featuredTestimonials = TESTIMONIALS_DATA.filter(t => t.featured).slice(0, 2);

    return (
        <div className="font-sans text-gray-600 antialiased bg-white">

            {/* Page Hero */}
            <PageHero
                title={<>About <span className="text-yellow-400">Us</span></>}
                subtitle="We are a trusted NDIS provider dedicated to empowering individuals with disabilities to live their best lives with dignity, respect, and independence."
                tagline="Who We Are"
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[
                    { label: 'About Us' }
                ]}
            />

            {/* Stats Bar */}
            <section className="bg-white border-b-4 border-yellow-500 relative z-20 shadow-2xl -mt-10 mx-4 lg:mx-auto lg:max-w-6xl p-8 lg:p-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {COMPANY_STATS.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-blue-950 p-4 mb-4">
                                    <Icon size={32} className="text-yellow-500" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-2">{stat.number}</h3>
                                <p className="text-gray-600 font-semibold uppercase text-sm">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image */}
                        <div className="relative h-full min-h-[500px] group">
                            <div className="absolute top-6 -left-6 w-full h-full border-4 border-yellow-500 z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Our Story"
                                className="w-full h-full object-cover relative z-10 shadow-xl rounded-none grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                                Our Journey
                            </h4>
                            <h2 className="text-4xl font-bold text-blue-950 mb-6 uppercase">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-500">Story</span>
                            </h2>

                            <p className="mb-6 leading-relaxed text-lg text-gray-600">
                                Community Care and Services was founded over a decade ago with a simple but powerful vision: to create a disability support service that truly puts people first.
                            </p>

                            <p className="mb-6 leading-relaxed text-lg text-gray-600">
                                Our founder, Dr. Patricia Hughes, worked in the disability sector for many years and saw firsthand how traditional services often failed to respect individual choice, dignity, and autonomy. She knew there had to be a better way.
                            </p>

                            <p className="mb-8 leading-relaxed text-lg text-gray-600">
                                Today, Community Care supports hundreds of individuals across Queensland, delivering person-centered care that empowers our clients to live the lives they choose. We're proud to be an NDIS registered provider with a proven track record of quality, compassion, and results.
                            </p>

                            <div className="bg-blue-950 p-6 border-l-4 border-yellow-500">
                                <p className="text-white text-lg italic leading-relaxed">
                                    "Our mission is simple: to empower every person we support to live with dignity, make their own choices, and participate fully in their community."
                                </p>
                                <p className="text-yellow-400 font-bold mt-4">— Dr. Patricia Hughes, Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(#172554 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            What Drives Us
                        </h4>
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                            Our Core Values
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                            These four values are the foundation of everything we do. They guide our decisions, shape our culture, and ensure we always put our clients first.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {COMPANY_VALUES.map((value) => {
                            const Icon = iconMap[value.icon];
                            return (
                                <div key={value.id} className="group text-center">
                                    {/* Icon */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="bg-blue-950 p-8 group-hover:bg-yellow-500 transition-colors">
                                            <Icon size={48} className="text-yellow-500 group-hover:text-blue-950 transition-colors" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-blue-950 uppercase mb-4">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
                {/* Decorative Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
                            What Sets Us Apart
                        </h4>
                        <h2 className="text-4xl font-bold uppercase mb-4">
                            Why Choose Community Care
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {WHY_CHOOSE_US.map((reason, index) => {
                            const Icon = iconMap[reason.icon];
                            return (
                                <div key={index} className="bg-blue-900/50 border border-blue-800 p-8 hover:border-yellow-500 transition-colors">
                                    <div className="bg-yellow-500 p-4 inline-block mb-6">
                                        <Icon size={32} className="text-blue-950" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-4">{reason.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            The People Behind the Care
                        </h4>
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                            Meet Our Team
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                            Our leadership team brings decades of combined experience in disability services, healthcare, and social work. They're supported by a dedicated team of over 50 qualified support workers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
                        {TEAM_DATA.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>

                    {/* Join Our Team CTA */}
                    <div className="bg-white p-8 lg:p-12 shadow-xl max-w-4xl mx-auto text-center border-t-4 border-yellow-500">
                        <h3 className="text-2xl font-bold text-blue-950 uppercase mb-4">
                            Join Our Team
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            We're always looking for passionate, qualified support workers to join our team. If you're committed to making a difference, we'd love to hear from you.
                        </p>
                        <a
                            href="/careers"
                            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-all shadow-lg inline-flex items-center gap-2"
                        >
                            View Careers
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                            Don't Just Take Our Word For It
                        </h4>
                        <h2 className="text-4xl font-bold text-blue-950 uppercase mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                        {featuredTestimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} variant="featured" />
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="/testimonials"
                            className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-10 text-sm uppercase tracking-wider rounded-none transition-all shadow-lg inline-flex items-center gap-2"
                        >
                            Read More Stories
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-yellow-500 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#172554 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase text-blue-950">
                        Ready to Get <span className="text-white">Started?</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mb-10 text-blue-900 text-lg font-semibold">
                        Let's have a conversation about how we can support you or your loved one.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl hover:-translate-y-1"
                        >
                            Contact Us
                        </a>
                        <a
                            href="tel:1300983885"
                            className="bg-white hover:bg-gray-100 text-blue-950 font-bold py-4 px-12 text-sm uppercase tracking-wider rounded-none transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <Phone size={18} />
                            1300 983 885
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;