import SideBarComponent from './Sidebar'
import MainComponent from './MainComponent'
import React from 'react'
import Sidebar1 from '../dashboard/Sidebar1'


function Dash() {
  return (
    <>
      <div className="flex">
        <div className='w-1/4'>
        <Sidebar1 />
        </div>
      
        <MainComponent />   
      </div>

    </>
  )
}

export default Dash
