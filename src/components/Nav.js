import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.svg';
import menuIcon from '../assets/icon-hamburger-menu.svg';
import { AiOutlineClose } from 'react-icons/ai';

function showMobileMenu() {
  const showTarget = document.querySelector('.mobile-nav');
  showTarget.style.display = 'grid';
  const menuIcon = document.querySelector('.mobile-menu');
  menuIcon.style.display = 'none';
  const closeBtn = document.querySelector('.close');
  closeBtn.style.display = 'block';
}

function changeIcon(e) {
  const closeBtn = document.querySelector('.close');
  closeBtn.style.display = 'none';
  const menuIcon = document.querySelector('.mobile-menu');
  menuIcon.style.display = 'block';
  const showTarget = document.querySelector('.mobile-nav');
  showTarget.style.display = 'none';
}

export default function Nav() {
  return (
    <nav className='main-nav'>
      <img src={logo} alt='little lemon logo' className='logo'/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        {/* <li><Link to='/reservations'>Reservations</Link></li> */}
        <li><Link to='/bookingpage'>Reservations</Link></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
      <img src={menuIcon} alt='menu icon' className='mobile-menu' onClick={showMobileMenu}/>
      <div className='close' onClick={changeIcon}><AiOutlineClose /></div>
    </nav>
  )
}
