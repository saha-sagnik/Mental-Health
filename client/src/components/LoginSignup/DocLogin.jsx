import React, { useState, useEffect } from 'react';
import { NavLink, json, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'flowbite';
import logo from '../assets/mindharbor-logo-removebg-preview1.png';
import google from '../assets/google.png';
import { useDispatch, useSelector } from 'react-redux';

import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../constants/firebase';

const DocLogin = () => {

    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
              // ...
              navigate('/')
            }
          });
    
          return()=> subscribe();
    },[]);

    const sendLogInfo =async (data)=>{
        const res = await axios.post('http://localhost:3000/doc-login',{
          data
        });
        return res?.data?.exists;
    }


    const firebaseLogin = ()=>{
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user",user,"token",token);
        sendLogInfo(user?.providerData[0]);
        if(user){
          navigate('/')
        }
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      }

  return (
    <div>
      <section className='bg-blue-50 dark:bg-gray-900 flex flex-wrap'>
        <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-blue-100 rounded-lg border border-gray-300 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <div className='flex justify-center items-center'>
                <img className='h-10 m-3' src={logo} alt="" />
                <Link path='/' className='flex items-center text-2xl font-semibold text-gray-900 dark:text-white '>
                  Mindharbor
                </Link>
              </div>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white '>
                Welcome Back
              </h1>
              <p className='text-xs font-light text-gray-500 dark:text-gray-400'>Unlock your inner peace. Don't have an account? <NavLink to='/signup' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>Sign Up.</NavLink> </p>
              <form className='space-y-4 md:space-y-6' action="">
                <div className='flex gap-4 flex-col-1'>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email"
                      class="bg-gray-50  pr-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="yourmail@mail.com"
                      required=""
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border pr-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      required="" />
                  </div>
                </div>
              </form>
              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
                <p
                  class="mx-4 text-sm mb-0 text-center dark:text-gray-500">
                  or
                </p>
              </div>
                <div className='w-full flex items-center justify-center gap-0 bg-white rounded-lg shadow hover:bg-blue-300 cursor-pointer transition duration-300 ease-in-out dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
                  onClick={()=>{
                    // login();
                    firebaseLogin();
                  }}
                >
                  <img className='pl-10 w-16' src={google} />
                  <h1 className='dark:text-gray-400 p-3 text-sm hover:text-white hover:cursor-pointer transition duration-300 ease-in-out'>Sign in with Google</h1>
                </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
              </div>
              <button type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={submit}
              >Sign in</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DocLogin;