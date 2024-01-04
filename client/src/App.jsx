import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from '../components/Login';
import Help from "../components/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


function HomePage() {
  return (
    <>
      <Help />
      <Navbar />
      
    </>
  );
}

export default App;
