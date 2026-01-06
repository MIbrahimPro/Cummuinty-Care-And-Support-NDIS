import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons not showing in React-Leaflet
const customIcon = new L.DivIcon({
    html: `<div style="background-color: cyan; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
    className: 'custom-pin',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

const FreeMapSection = () => {
    // Coordinates for "unit 35, 54 outlook place, Durack 4077, QLD"
    const position = [-27.5913, 152.9734];

    return (
        <section className="w-full h-[450px] relative z-0">
            <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                {/* OpenStreetMap free tiles */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Custom Cyan Marker */}
                <Marker position={position} icon={customIcon}>
                    <Popup className="font-inter">
                        <span className="font-bold">Community Care Office</span> <br />
                        Unit 35, 54 Outlook Place, Durack
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Address Overlay - Matching your design */}
            <div className="absolute bottom-8 left-8 bg-white p-5 rounded-xl shadow-xl z-[1000] hidden md:block max-w-xs border-l-8 border-cyan">
                <h4 className="font-nohemi font-bold text-[18px] text-gray-900 mb-1 uppercase tracking-tight">
                    Visit Our Office
                </h4>
                <p className="font-inter text-[15px] text-gray-600 leading-snug">
                    Unit 35, 54 Outlook Place, <br />
                    Durack 4077, QLD
                </p>
            </div>
        </section>
    );
};

export default FreeMapSection;