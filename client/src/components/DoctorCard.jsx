// DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ name, position, imageUrl, specialized }) => {
    return (
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img src={imageUrl} alt={name} />
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    {position}
                </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                {/* Assuming specialized is an array, you might want to map through it */}
                {specialized.map((specialty, index) => (
                    <span key={index} className="text-sm text-blue-gray-700">
                        {specialty}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default DoctorCard;
