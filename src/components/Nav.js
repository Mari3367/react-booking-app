import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.svg';
import menuIcon from '../assets/icon-hamburger-menu.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';


export default function Nav() {
  const [active, setActive] = useState('');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close');

    window.addEventListener('resize', handleWindowResize);

    if(windowWidth > 640) {
      mobileNav.style.display = 'none';
      menuIcon.style.display = 'none';
      closeBtn.style.display = 'none';
    }  else if (windowWidth < 640 && active) {
      mobileNav.style.display = 'grid';
      menuIcon.style.display = 'none';
      closeBtn.style.display = 'block';
    } else if (!active) {
      menuIcon.style.display = 'block';
    }

      return () => {
      window.removeEventListener('resize', handleWindowResize);
    }

  });

  function showMobileMenu() {
    setActive(true);

      if(active) {
        const mobileNav = document.querySelector('.mobile-nav');
      mobileNav.style.display = 'grid';
      const menuIcon = document.querySelector('.mobile-menu');
      menuIcon.style.display = 'none';
      const closeBtn = document.querySelector('.close');
      closeBtn.style.display = 'block';
      }

  }

  function changeIcon(e) {
    setActive(false);

    const closeBtn = document.querySelector('.close');
    closeBtn.style.display = 'none';
    const menuIcon = document.querySelector('.mobile-menu');
    menuIcon.style.display = 'block';
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = 'none';
  }

  return (
    <nav className='main-nav'>
      <img src={logo} alt='little lemon logo' className='logo'/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/reservations'>Reservations</Link></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
      <img src={menuIcon} alt='menu icon' className='mobile-menu' onClick={showMobileMenu}/>
      <div className='close' onClick={changeIcon}><AiOutlineClose /></div>
    </nav>
  )
}
