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

          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Consult Now
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>

          <div className='flex items-center justify-between gap-11 h-[10vw] w-[20vw]'>
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
