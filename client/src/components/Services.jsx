import React from 'react';
import { Link } from 'react-router-dom';
import woman from '../assets/self-image.jpg';
 

const Services = () => {
  const renderCard = () => {
    const cardData = [
     {id:1,title:'Card1',image:'../assets/self-image.jpg',linkTo: '/card1'},
     {id:2,title:'Card1',image:'../assets/self-image.jpg',linkTo: '/card2'},
     {id:3,title:'Card1',image:'../assets/self-image.jpg',linkTo: '/card3'},
     {id:4,title:'Card1',image:'../assets/self-image.jpg',linkTo: '/card4'}
    ];

    
    return cardData.map((card) => (
      <div key={card.id} className='w-full flex items-center justify-center gap-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <Link  key={card.id} to={card.linkTo}>
          <img className='p-8 rounded-t-lg' src={woman} alt={card.title} />
        </Link>
      </div>
    ));
  };
  

  return (
    <div className='p-10'>
      <div className='flex items-center justify-center pb-8 font-extrabold text-blue-900 text-5xl gap-4 '>
        Feel better today,
        stay ready for tomorrow
      </div>
      <div className='flex items-center justify-center text-3xl font-bold pb-8 text text-gray-700'>What mental health support do you need?</div>
    <div className='flex gap-6'>{renderCard()}</div>
      
    </div>
  );
};

export default Services;
