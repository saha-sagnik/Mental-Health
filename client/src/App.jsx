import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Help from "./components/Help";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import './index.css'
import Services from "./components/Services";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
  return (
    <>
    <GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
      <Help/>
      <Navbar />
      <Outlet />
      <WhyChooseUs />
      <Footer />
    </GoogleOAuthProvider>
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
      },
      {
        path:'/card/:id',
        element:<Card/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />) ;
