// components/Waitlist.js
import React from 'react';

const Waitlist = () => {
    const openForm = () => {
        window.open('https://forms.gle/dfQzzzQBaf3E26367', '_blank');
    };

    return (
        <div className="bg-black text-white py-16 px-6 md:px-12 text-center border border-white rounded-[50%] w-[70%] mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Don’t just scroll... join the real ones 🚀
            </h3>
            <p className="text-base md:text-lg mb-6 text-gray-300">
                Be the first to try NoCap. We’re launching soon, and your vibe is invited.
            </p>
            <button
                onClick={openForm}
                className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
            >
                Join the Waitlist
            </button>
        </div>
    );
};

export default Waitlist;
