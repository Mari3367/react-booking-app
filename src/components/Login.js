import React, { useRef } from 'react';
import './login.css';
import { useAuth } from '../context/AuthContext';
 import Main from './Main';

export default function Login() {
  const userName = useRef(null);
  const { isLoggedIn,
      setIsLoggedIn,
      user,
      setUser} = useAuth()

  function signIn (e) {
    e.preventDefault();
    setIsLoggedIn(true);
    setUser(userName.current.value);
  }

  if(isLoggedIn) {
    return <Main />
  }
  return (
    <div className='login-wrapper'>
      <form className='login-form' onSubmit={signIn}>
        <h1 className='login-heading'>Login</h1>
        <input placeholder='Your Name' ref={userName}/>
        <input type='password' minLength="8" placeholder='Password'/>
        <button type='submit' className='signin-btn'>Sign In</button>
      </form>
    </div>
  )
}
