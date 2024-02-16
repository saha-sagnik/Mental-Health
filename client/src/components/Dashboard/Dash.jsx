import SideBarComponent from './Sidebar'
import MainComponent from './MainComponent'
import React from 'react'

function Dash() {
  return (
    <div className='flex items-center bg-slate-200'>
      <SideBarComponent />
      <MainComponent/>
    </div>
  )
}

export default Dash
