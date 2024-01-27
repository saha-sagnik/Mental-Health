import React, { useEffect, useState } from 'react';
import doctorItems from '../constants/doctoritems.json';
import docList from '../constants/doctor.json'

const api = "https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/";

const OurDoctors = () => {
    const [doc,setDoc] = useState(0);
    useEffect(() => {
      const timerId = setTimeout(() => {
        if (doc === 4) {
          setDoc(0);
        } else {
          setDoc(doc + 1);
        }
      }, 2000);
  
      //cling the timer
      return () => clearTimeout(timerId);
    }, [doc]);
  return (
    <section className="dark:bg-gray-900 h-[34vw]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
        <div className="place-self-center lg:col-span-7 w-[30vw]">
          <h2 className="max-w-2xl mb-4 font-bold tracking-tight leading-none md:text-md lg:text-2xl xl:text-3xl dark:text-white">
            Meet Our Experienced Mental Health Professionals
          </h2>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Our skilled mental health professionals specialize in over 150 conditions, treatment methods, and diverse mental health needs.
          </p>

          <div className='grid grid-cols-3 items-center justify-center gap-20'>
            {doctorItems.map((column, columnIndex) => (
              <div key={columnIndex} className={`flex-col`}>
                {column.map((item, index) => (
                  <div className="text-lg" key={index}>✅{item}<i class="ri-checkbox-circle-line" className='ml-10'></i></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mt-0 lg:col-span-4 lg:flex bg-blue-600 mr-[5vw] w-[22vw] h-[26vw] rounded-lg absolute top-[9%] right-8 z-20">
          <img src={api+docList[doc].img} alt="mockup" />
        </div>

        <div className="lg:mt-0 lg:col-span-4 lg:flex bg-[#a6b2ce] mr-[5vw] w-[22vw] h-[26vw] rounded-lg absolute top-[11%] right-[2%] z-10"></div>
        <div className="lg:mt-0 lg:col-span-4 lg:flex bg-[#d4dcef] mr-[5vw] w-[22vw] h-[26vw] rounded-lg absolute top-[12%] right-[1.5%]"></div>
      </div>
    </section>
  );
};

export default OurDoctors;
