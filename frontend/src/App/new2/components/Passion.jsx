import React from 'react';

const Passion = () => {
    return (
        <section
            className="relative h-[75vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url('https://lirp.cdn-website.com/401a0922/dms3rep/multi/opt/shutterstock_540408304-1920w.jpg')`
            }}
        >
            {/* Optional Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-white text-[48px] font-bold leading-tight mb-8 font-nohemi">
                    Disability Support Is Our Passion
                </h1>

                <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white py-[15px] px-[30px] rounded-md font-inter font-medium">
                    Request a Call Back
                </button>
            </div>
        </section>
    );
};

export default Passion;