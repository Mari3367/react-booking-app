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
        <li onClick={()=> setTarget('about')} className={target === 'about' ? 'highlight' : ''}><a href='#'>About</a></li>
        <li onClick={()=> setTarget('menu')} className={target === 'menu' ? 'highlight' : ''}><a href='#'>Menu</a></li>
        {/* <li onClick={()=> setTarget('reservations')} className={target === 'reservations' ? 'highlight' : ''}><Link to='/reservations'>Reservations</Link></li> */}
        <li onClick={()=> setTarget('bookingpage')} className={target === 'bookingpage' ? 'highlight' : ''}><Link to='/reservations'>Reservations</Link></li>

        <li onClick={()=> setTarget('order')} className={target === 'order' ? 'highlight' : ''}><a href='#'>Order Online</a></li>
        <li onClick={()=> setTarget('login')} className={target === 'login' ? 'highlight' : ''}><a href='#'>Login</a></li>
      </ul>
    </nav>
  )
}
