import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Help from "./components/Help";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import OurDoctors from "./components/ourDoctors";
import './index.css'
import Services from "./components/Services";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Card from "./components/Card";
import Store from '../src/store/Store'
import { Provider, useSelector } from 'react-redux';
import Show from "./components/Show";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
  // const navigate = useNavigate();
  // const status = useSelector(Store=>Store.info.loggedIn) ;
  //   if(!status){
  //   navigate('/login');
  //   console.log(status);
  // }
  return (
    <Provider store={Store}>
    <GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
      <Help/>
      <Navbar />
      <Outlet />
      <WhyChooseUs />
      <OurDoctors />
      <Footer />
    </GoogleOAuthProvider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Provider store={Store}><AppLayout/></Provider>,
    children:[
      {
        path:'/',
        element:[<Hero />,<Services/>,<WhyChooseUs />]
      },
      {
        path:'/card/:id',
        element:<Card/>
      },
      {
        path:'/show',
        element:<Show />
      }
    ]
  },
  {
    path:'/login',
    element:<GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
            <Login />
          </GoogleOAuthProvider>
  },
  {
    path:'/signup',
    element:<GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
              <SignUp />
            </GoogleOAuthProvider>
  },
])

root.render(<RouterProvider router={appRouter} />) ;
