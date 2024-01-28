import React, { useState } from 'react';
import '../styles/style.css';
import RenderCard from './renderCard';

 
const Services = () => {
     
    return (
      <section id='services' >
      <div className='p-10'>
        <div className='flex items-center justify-center pb-8 font-extrabold text-blue-900 text-5xl gap-4 '>
          Feel better today,
          stay ready for tomorrow
        </div>
        <div className='flex items-center justify-center text-3xl font-bold pb-8 text text-gray-700'>What type of Mental Health Support do you Need?</div>
        <div className='flex gap-6'>
          <RenderCard/>
        </div>
      </div>
      </section>
    );
  };

export default Services;
