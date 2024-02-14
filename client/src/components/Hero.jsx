import React, { useState } from 'react';
import woman1 from '../assets/login-pic.jpg';
import woman2 from '../assets/pexels-emmy-e-2381069.jpg';
import woman3 from '../assets/pexels-andrea-piacquadio-774909.jpg';
import woman4 from '../assets/pexels-guilherme-almeida-1858175.jpg';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
    const word = useTypewriter({
        words: ['Panic Attacks', 'OCD', 'Bipolar Disorder', 'PTSD', 'Suicidal Tendencies', 'more'],
        loop: {}
    });

    return (
        <section className="bg-white dark:bg-gray-900" id='hero'>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center lg:col-span-7 w-[45vw] mt-4">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white h-60 xl:h-48">Life Changing Care for Anxiety, Depression & <span className='font-bold text-blue-400 h-44'> {word[0]}</span> </h1>
                    <p className="max-w-2xl py-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">It Gets <span className='font-semibold'>Much Better</span> from Here!! <br /> Experience effective and enduring one-on-one support from top-notch experts in Online Therapy and Psychiatry. </p>
                    <Link to='/login' className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-4 lg:flex ml-[3vw]" id="images">
                    <img src={woman1} alt="mockup" />
                    {/* <img src={woman2} alt="image1" />
                    <img src={woman3} alt="image2" />
                    <img src={woman4} alt="image3" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;
