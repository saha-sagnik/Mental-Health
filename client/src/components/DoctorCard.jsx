// DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ name, position, imageUrl, specialized }) => {
    return (
        <div className="relative mx-4 mt-4 pb-3 overflow-hidden text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl h-[92%]">
            <img src={imageUrl} alt={name} className='w-full h-[78%] object-cover object-top'/>
            <div className="p-5 text-center flex flex-col gap-1">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <h5 className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    {position}
                </h5>
            </div>
            <div className="flex justify-center ">
                {/* Assuming specialized is an array, you might want to map through it */}
                {specialized.map((specialty, index) => (
                    <div className='flex gap-2'>
                    <span className="text-sm text-blue-gray-700">
                      Expertise: 
                    </span>
                    <span key={index} className="text-sm text-blue-gray-700">
                      {specialty}
                    </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorCard;
