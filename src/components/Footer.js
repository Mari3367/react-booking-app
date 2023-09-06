import React from 'react';
import imageFooter from '../assets/restaurant.jpg';

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={imageFooter} alt='restaurant' className='footer-image'/>
      </div>
      <div>
        <h4>Doormat Navigation</h4>
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
        <h4>Contact</h4>
        <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>phone number</a></li>
          <li><a href='#'>email</a></li>
        </ul>
      </div>
     <div>
        <h4>Social Media Links</h4>
        <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>phone number</a></li>
          <li><a href='#'>email</a></li>
        </ul>
     </div>
    </footer>
  )
}
