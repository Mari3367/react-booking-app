import React from 'react';
import {Link} from 'react-router-dom';
import './mobilenav.css';
import {useState} from 'react';


export default function MobileNav() {
  const [target, setTarget] = useState('');

  return (
    <nav className='mobile-nav'>
        <ul>
        <li onClick={()=> setTarget('home')} className={target === 'home' ? 'highlight' : ''}><Link to='/' >Home</Link></li>
        <li onClick={()=> setTarget('about')} className={target === 'about' ? 'highlight' : ''}><Link to='/about'>About</Link></li>
        <li onClick={()=> setTarget('menu')} className={target === 'menu' ? 'highlight' : ''}><Link to='/menu'>Menu</Link></li>
        <li onClick={()=> setTarget('bookingpage')} className={target === 'bookingpage' ? 'highlight' : ''}><Link to='/reservations'>Reservations</Link></li>
        <li onClick={()=> setTarget('order')} className={target === 'order' ? 'highlight' : ''}><Link to='/order'>Order Online</Link></li>
        <li onClick={()=> setTarget('login')} className={target === 'login' ? 'highlight' : ''}><a href='#'>Login</a></li>
      </ul>
    </nav>
  )
}
