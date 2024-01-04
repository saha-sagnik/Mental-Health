import React from 'react'

const Help = () => {
  return (
    <div className='flex justify-center p-4 bg-blue-600'>In case of emergency, &nbsp;
      <div className='underline font-semibold'>don't use this app</div>
      <div className='text-white font-bold'>&nbsp;call us at</div><a href="tel:+9152987821"><div className='text-blue-500 hover:underline text-black'>&nbsp;9152987821</div></a>
    </div>
  )
}

export default Help