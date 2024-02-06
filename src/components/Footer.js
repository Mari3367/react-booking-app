import React from 'react';
import footerIcon from '../assets/logo-white.png';
import './footer.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Footer() {

    const { isLoggedIn,
          setIsLoggedIn,
          user,
          setUser} = useAuth();

      function logout() {
        setIsLoggedIn(false)
      }

  return (
    <footer>
      <div>
        <img src={footerIcon} alt='restaurant' className='footer-image'/>
      </div>
      <div>
        <h4 className='footer-title'>Doormat Navigation</h4>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservations'>Reservations</Link></li>
          <li><Link to='/order'>Order Online</Link></li>
          <li><Link to='/login'>{isLoggedIn ? <button className='logout-btn-footer' onClick={logout}>Logout</button> : 'Login'}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className='footer-title'>Contact</h4>
        <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>phone number</a></li>
          <li><a href='#'>email</a></li>
        </ul>
      </div>
     <div>
        <h4 className='footer-title'>Social Media Links</h4>
        <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>phone number</a></li>
          <li><a href='#'>email</a></li>
        </ul>
     </div>
    </footer>
  )
}
