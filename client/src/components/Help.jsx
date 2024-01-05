import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Help = () => {

  const navigate = useNavigate()

  const loggedin = useSelector(Store=>Store.info.loggedIn) ;
  if(!loggedin){
    navigate('/login');
    return ;
  }
  return (
    <div className='flex flex-col items-center p-4 bg-blue-600 text-white'>
      <p>In case of an emergency, please <span className='underline font-semibold'>refrain from using this website.</span> <span className='pl-1.5 font-bold'>Instead, reach us directly by calling </span><a href="tel:+9152987821" className='text-blue-500 hover:underline text-neutral-200'>+9152987821</a></p>
      <p><span className='font-semibold'>Your safety and well-being are our top priorities!</span></p>
    </div>
  );
};

export default Help;
