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
import Dash from "./components/Dashboard/Dash";
import LoggedIn from "./components/LoggedIn";
import Consult from "./components/Consult";
import User from "./components/User";
import PdfDownload from "./components/pdftest/PdfDownload";
import FurtherQuestions from "./components/FurtherQuestions";


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
      {window.location.pathname !== '/dashboard' && <Help />}
      <Navbar />
      <Outlet />
      <Footer />
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
        element:[<Hero />,<Services/>,<OurDoctors />]
      },
      {
        path:'/card/:id',
        element:<Card/>
      },
      {
        path:'/show',
        element:<Show />
      },
      {
        path: '/dashboard',
        element: <Dash/>
      },
      {
        path:'/furtherquestions',
        element:<FurtherQuestions />
      }
    ]
  },{
      path: 'consult',
      element:<Consult/>
  },
  {
    path:'loggedin',
    element:< LoggedIn />
  },
  {
path: 'user',
element: <User/>
  },
  
  {
    path:'/login',
    element:<Provider store={Store}><GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
            <Login />
          </GoogleOAuthProvider>
      </Provider>
  },
  {
    path:'/signup',
    element:<GoogleOAuthProvider clientId="452856652804-fl5htt0506fjktjs8aashorq3vjfgj60.apps.googleusercontent.com">
              <SignUp />
            </GoogleOAuthProvider>
  },
  {
    path:'/pdf',
    element:<PdfDownload />
  }
])

root.render(<RouterProvider router={appRouter} />) ;
