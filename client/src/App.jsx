import React from "react"
import Navbar from "../components/Navbar"
import {BrowserRouter as Routes,Route} from 'react-router-dom'
import Help from "../components/Help"
function App() {
  return (
    <>
    <Help/>
    <Navbar/>
    </>
    
  )
}

export default App
