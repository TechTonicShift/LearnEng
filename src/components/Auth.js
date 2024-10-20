// src/components/Auth.js
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const getFirstName = (name) => {
    return name?.split(' ')[0] || '';
  };

  return (
    <div className="auth-container">
      {user ? (
        <h1>Welcome, {getFirstName(user.displayName)}!</h1>
      ) : (
        <button className="btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Auth;
