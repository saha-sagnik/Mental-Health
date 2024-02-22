import React from 'react';
import hero from '../assets/homepage-hero-image-web-v1.png';
import doctorItems from '../constants/doctor.json'
import { Link } from 'react-router-dom';
import 'boxicons'; 
import DoctorCard from './DoctorCard';


const generateImages = (count) => {
    const images = [];

    for (let i = 0; i < count; i++) {
        images.push(
            <div key={i} className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden inline-block text-gray-500 border-3 border-white relative pointer-events-none">
                <img src={doctorItems[i].img || hero} alt={`Image ${i + 1}`} />
            </div>
        );
        
    }

    return images;
};

const Consult = () => {
    return (
        <>
        <section className='bg-[#f8e9e6] mb-12'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6x">Take consultation from the best</h1>

                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">Feel free to reach out for consultation—our support is here for you. Your well-being matters to us.</p>
                    <div className='flex items-center gap-3'>
                        {generateImages(3)}
                        <div className='px-2'>+69 Doctors are online</div>
                        <span class="relative flex mt-2 h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                    <Link href="#" class="inline-flex items-center justify-center mt-5 px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500">
                        Get started
                    </Link>
                    <div className=" py-8 gap-7 flex items-center text-base">
                    <div className='flex gap-1'>
                    <box-icon name='award'></box-icon>
                    <p>Verified Doctors</p>
                    </div>
                    <div className='flex gap-1'>
                    <box-icon name='report' type='solid' ></box-icon>
                    <p>Digital prescription</p>
                    </div>
                    <div className='flex gap-1'>
                    <box-icon name='message-square-detail' ></box-icon>
                    <p>Free Followup</p>
                    </div>
                    </div>
                </div>
                <div className="hidden w-[600px] h-[300px] lg:flex">
                    <img className='' src={hero} alt="mockup" />
                </div>
            </div>
        </section>
        {/* Our Doctors section */}
        <div className='p-4 text-3xl flex flex-col items-center'>
            <h1 className='font-semibold underline text-4xl mb-10 ml-24'>Our Doctors</h1>
            <div className='grid grid-cols-3 h-full w-[90%]'>
            {doctorItems.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    name={doctor.name}
                    position={doctor.position}
                    imageUrl={doctor.img}
                    specialized={[doctor.specialized]}
                />
            ))}
        </div>
        </div>
        </>
    );
}

export default Consult;
