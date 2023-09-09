import React from 'react';
import headerImage from '../assets/restauranfood.jpg'
import './header.css';

export default function Header() {
  return (
    <header>
     <div className='header-wrapper'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p className='header-text'>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button className='reserve'>Reserve a table</button>

     </div>
      <img src={headerImage} alt='restauran food' className='header-image'/>
    </header>
  )
}
