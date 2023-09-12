import React from 'react';
import headerImage from '../assets/restauranfood.jpg'
import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
     <div className='header-wrapper'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p className='header-text'>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      {/* <button className='reserve'><Link to='/reservations'>Reserve a table</Link></button> */}
      <button className='reserve'><Link to='/bookingpage'>Reserve a table</Link></button>

     </div>
      <img src={headerImage} alt='restauran food' className='header-image'/>
    </header>
  )
}
