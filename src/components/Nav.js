import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.svg';
import menuIcon from '../assets/icon-hamburger-menu.svg';

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt='little lemon logo' className='logo'/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
      <img src={menuIcon} alt='menu icon' className='mobile-menu'/>
    </nav>
  )
}
