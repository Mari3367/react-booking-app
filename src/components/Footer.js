import React from 'react';
import footerIcon from '../assets/logo-white.png';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={footerIcon} alt='restaurant' className='footer-image'/>
      </div>
      <div>
        <h4 className='footer-title'>Doormat Navigation</h4>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>
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
