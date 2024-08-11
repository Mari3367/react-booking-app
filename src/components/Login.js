import React, { useRef } from 'react';
import './login.css';
import { useAuth } from '../context/AuthContext';
 import Main from './Main';
import { Link } from 'react-router-dom';

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
        <h1 className='login-heading'>Sign In</h1>
        <input placeholder='Your Name' ref={userName}/>
        <input type='password' minLength="8" placeholder='Password'/>
        <button type='submit' className='signin-btn'>Sign In</button>
        <span className='account-create'>Don't have an account? <Link to='/login/registration'>Create one!</Link></span>
      </form>
    </div>
  )
}
