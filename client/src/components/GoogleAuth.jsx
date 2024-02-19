import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../constants/firebase';

const GoogleAuth = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with Google provider using Firebase
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleAuth;
