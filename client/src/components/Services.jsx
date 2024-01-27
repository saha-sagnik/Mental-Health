import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import indivHappy from '../assets/indiv-happy.png';
import indivSad from '../assets/indiv-sad.png';
import teensHappy from '../assets/teens-happy.png';
import teensSad from '../assets/teens-sad.png';
import couplesHappy from '../assets/couples-happy.png';
import couplesSad from '../assets/couples-sad.png';
import elderlyHappy from '../assets/elderly-happy.png';
import elderlySad from '../assets/elderly-sad.png';
 
const Services = () => {
    const [cardActive, setCardActive] = useState(null);
  
    const renderCard = () => {
      const cardData = [
        { id: 1, title: 'Card1', image1: indivSad, image2: indivHappy, linkTo: '/card/1', color: '#e1efef', text1: 'Therapy for me', text2: 'Individual', text3: 'Get Started' },
        { id: 2, title: 'Card2', image1: teensSad, image2: teensHappy, linkTo: '/card/2', color: '#f2fbcc', text1: 'For ages 13-17', text2: 'Teens', text3: 'Get Started' },
        { id: 3, title: 'Card3', image1: couplesSad, image2: couplesHappy, linkTo: '/card/3', color: '#e1e5f0', text1: 'Therapy for us', text2: 'Couples', text3: 'Get Started' },
        { id: 4, title: 'Card4', image1: elderlySad, image2: elderlyHappy, linkTo: '/card/4', color: '#f1ddde', text1: 'Psychiatry and prescriptions', text2: 'Elderly', text3: 'Get Started' }
      ];
  
      return cardData.map((card) => (
        <Link key={card.id} to={card.linkTo}
          className={`w-full flex-col items-center gap-4 max-w-sm h-[55vh] border border-gray-200 rounded-lg shadow bg-${card.color}`}
          id={`card-${card.id}`}
          onMouseEnter={() => setCardActive(card.id)}
          onMouseLeave={() => setCardActive(null)}
        >
          <div className='flex justify-center p-[1vw] xl:text-lg md:text-md text-[#233876] text-semibold'>{card.text1}</div>
          <div className='flex justify-center p-[0.5vw] xl:text-[1.9vw] md:text-[3vw] font-bold'>
            {card.text2}
          </div>
          <div className='flex items-center justify-center text-md'>
            {card.text3} <i className="ri-arrow-drop-right-line"></i>
        </div>
        {cardActive === card.id ? <img className='items-center rounded-t-lg flex justify-center h-[15vw] ml-[2vw] transition-all duration-500' src={card.image1} alt={card.title} /> : <img className='rounded-t-lg flex justify-center h-[15vw] ml-[2vw] transition-all duration-300' src={card.image2} alt={card.title} />}
        </Link>
      ));
    };
  
    return (
      <div className='p-10'>
        <div className='flex items-center justify-center pb-8 font-extrabold text-blue-900 text-5xl gap-4 '>
          Feel better today,
          stay ready for tomorrow
        </div>
        <div className='flex items-center justify-center text-3xl font-bold pb-8 text text-gray-700'>What type of Mental Health Support do you Need?</div>
        <div className='flex flex-col xl:flex-row xl:gap-6'>{renderCard()}</div>
      </div>
    );
  };

export default Services;
