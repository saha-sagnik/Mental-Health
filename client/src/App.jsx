import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Help from "./components/Help";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
  return (
    <>
    <GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
      <Navbar />
      <Outlet />
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
        element:<Hero />
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
