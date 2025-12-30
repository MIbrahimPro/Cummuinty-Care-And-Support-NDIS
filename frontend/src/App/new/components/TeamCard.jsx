// src/App/new/components/TeamCard.jsx
import React from 'react';
import { Award } from 'lucide-react';

const TeamCard = ({ member }) => {
    return (
        <div className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-80"></div>

                {/* Name & Role on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold uppercase text-sm tracking-wider">
                        {member.role}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                    <Award size={20} className="text-yellow-500 shrink-0 mt-1" />
                    <p className="text-sm text-gray-600 font-semibold">
                        {member.qualifications}
                    </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;