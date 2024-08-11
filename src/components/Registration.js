import React from 'react';
import './registration.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export const Registration = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }
    const navigate = useNavigate();
  return (
    <div className='registration-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1 className='login-heading'>Sign up</h1>
        <input placeholder='Your Name'/>
        <input type='email' placeholder='Your Email'/>
        <input type='password' minLength="8" placeholder='Password'/>
        <button type='submit' className='signin-btn'>Sign Up</button>
        <span className='account-create'>Already have an account? <Link to='/login'>Sign in!</Link></span>
      </form>
    </div>
  )
}
