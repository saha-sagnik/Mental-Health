import React, { useEffect } from 'react';
import 'flowbite';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import navitems from "../constants/navitems.json";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/InfoSlice';
import { auth } from '../constants/firebase';
import GoogleAuth from './GoogleAuth'; // Import the GoogleAuth component
import axios from 'axios';


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.info.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // If the user is authenticated with Firebase, check if the user exists in MongoDB
        const postEmail = user?.email;
        console.log("User:",user,"postEmail",postEmail);
      } else {
        // User is signed out
        console.log('User is signed out');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handlenormalauth =async ()=>{
    try {
      const response = await axios.get(`http://localhost:3000/checkUser`);

      if (response.data.exists) {
        // If the user exists in MongoDB, dispatch user details to Redux store
        console.log("User exists");
        dispatch(addUser(user?.providerData[0]));
      } else {
        // If the user does not exist in MongoDB, redirect to "/signup"
        console.log("User does not exist");
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  }

  useEffect(()=>{
    handlenormalauth();
  },[]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      dispatch(removeUser());
      navigate('/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MindHarbor</span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <>
              <div>
                <NavLink to="/user" className='flex font-medium items-start text-xl px-4 py-2'>{user.name || user.displayName}</NavLink>
              </div>
              <button
                onClick={handleSignOut}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={()=>{
                  navigate('/login')
                }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get Started
              </button>
            </>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
