import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Help from "./components/Help";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './index.css'
import Services from "./components/Services";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:[<Hero />,<Services/>]
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/signup',
        element:<SignUp />
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />) ;
