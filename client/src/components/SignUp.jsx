import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import logo from '../assets/mindharbor-logo-removebg-preview1.png'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { auth } from '../constants/firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

  const navigate = useNavigate();
  const [phno,setPhno] = useState();
  const [signupdata,setSignupdata] = useState(false);
  const [fname,setFname] = useState(null);
  const [lname,setLname] = useState(null)
  const [mail,setMail] = useState(null);
  const [password,setPassword] = useState();
  const [next,setNext] = useState(false);
  const [gender,setGender] = useState(null);
  const [age,setAge] = useState(null);

  const handleUser =async (access_token)=>{
    const data =await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`);
    const json = await data.json();
    console.log(json);
    setSignupdata(json?true:false);
    setFname(json?.given_name);
    setLname(json?.family_name);
    setMail(json?.email);
    console.log("Added User",json);
  }

  const handleNext = ()=>{
    if(mail && password && fname && lname){
      if(password.length >= 8){
        setNext(true);
        return ;
      }
      else
        alert('Password too small');
    }
    else{
      alert('Please Fill all the Details');
    }
  }

  const handleSignup =async ()=>{
    const baseURL = process.env.NODE_ENV === 'production' ? `${process.env.PRODUCTION_URL}` : 'http://localhost:3000';
    try {
      const response = await axios.post(`${baseURL}/signup`, {
          firstName: fname,
          lastName: lname,
          mail,
          password,
          age,
          phno
      });

      if (response?.data?.signedup) {
          navigate('/login');
      } else if (response?.data?.exists) {
          alert('Email already exists');
      } else {
          alert('Server Side Error! Please Try Again');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
  }
  //   createUserWithEmailAndPassword(auth, mail, password)
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert("Email already Registered");
  //   navigate('/login');
  //   // ..
  // });

  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      handleUser(codeResponse.access_token)
    },
    onError: (error) => {
      console.log('Google login failed:', error);
    },
  });
  return (
    <>
   
    <section className='bg-blue-50 dark:bg-gray-900 flex flex-wrap h-screen'>
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-[#B9E0FF] border border-gray-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <div className='flex justify-center items-center'>
          <img className='h-10 m-3' src={logo} alt="" />
          <Link path='/' className='flex items-center text-2xl font-semibold dark:text-white '>
            Mindharbor
          </Link>
          </div>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white '>
            Create your account
          </h1>
          <p className='text-xs font-light text-gray-500 dark:text-gray-400'>Embracing Hope. Already have an account? <NavLink to='/login' className='font-medium text-blue-600 hover:underline dark:text-orange-500'>Sign In.</NavLink> </p>
          <form className='space-y-4 md:space-y-6' action="">
            {!next? <div className='grid gap-4 grid-cols-2 grid-rows-2'>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium dark:text-white">First Name</label>
                <input value={fname} 
                onChange={(e)=>{
                  setFname(e.target.value);
                }}
                type="text" name="text" id="name" 
                class="bg-gray-50 pr-10 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Jane" required="" />
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium  dark:text-white">Last Name</label>
                <input value={lname}
                onChange={(e)=>{
                  setLname(e.target.value);
                }}
                type="name" name="name" 
                id="name" class="bg-gray-50  pr-10 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Doe" required="" />
              </div>
              
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input value={mail}
                onChange={(e)=>{
                  setMail(e.target.value);
                }}
                type="email" name="email" id="email" 
                class="bg-gray-50  pr-10 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username@mail.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Password</label>
                <input 
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                type="password" name="password" id="password" 
                placeholder="••••••••" 
                class="bg-gray-50 border pr-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required="" />
              </div>
            </div>
            :
            <div className='grid gap-4 grid-cols-2 grid-rows-2'>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium dark:text-white">Age</label>
                <input 
                onChange={(e)=>{
                  setAge(e.target.value);
                }}
                type="text" name="text" id="name" 
                class="bg-gray-50  pr-10 border border-gray-3 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Enter Age" required="" />
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium  dark:text-white">Gender</label>
                <select 
                className={`rounded-md text-gray-600 ${gender? 'text-black' : "text-gray-600"  }`}
                onChange={(e)=>{
                  setGender(e.target.value);
                }}
                >
                  <option className='hidden' selected>Select a gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Trans</option>
                  <option>Prefer Not To Say</option>
                </select>
              </div>
                
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input value={mail}
                onChange={(e)=>{
                  setMail(e.target.value);
                }}
                type="email" name="email" id="email" 
                class="bg-gray-50  pr-10 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="yourmail@mail.com" required />
              </div>
              <div>
                <label for="phno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                onChange={(e)=>{
                  setPhno(e.target.value);
                }}
                type="number"
                class="bg-gray-50  pr-10 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Mobile number" required />
              </div>
            </div>
            }
          </form>
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
            <p
              class="mx-4 text-sm mb-0 text-center dark:text-gray-500">
              or
            </p>
          </div>
          {!signupdata && <div 
          onClick={login}
          className='w-full flex items-center justify-center gap-0 bg-white rounded-lg shadow hover:text-white hover:bg-blue-500 cursor-pointer transition duration-300 ease-in-out dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <img className='pl-10 w-16' src={google} />
            <h1 className='dark:text-gray-400 p-3 text-sm'>Sign in with Google</h1>
          </div>}
         
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">By signing up, you are creating an account with MindHarbor, and you agree to MindHarbor's <Link className='font-medium text-blue-400 hover:underline dark:text-blue-500'>Terms of Use</Link> and <Link className='font-medium text-blue-400 hover:underline dark:text-blue-500'>Privacy Policy</Link>.</label>
              </div>
            </div>
            
          </div>
          {!next?<button
          onClick={(e)=>{
            e.preventDefault();
            // handleSignup();
            const res = handleNext();
            if(res) setNext(true);
          }}
          class="w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next</button>
          :
          <button
          onClick={(e)=>{
            e.preventDefault();
            handleSignup();
          }}
          class="w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign Up</button>
          }
          <p class="text-sm font-light text-gray-500 dark:text-gray-400"></p>
        </div>
      </div>
    </div>
    
  </section>
  </>
  )
}

export default SignUp