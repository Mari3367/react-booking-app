import React from 'react';
import './highlights.css';
import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.png';
import lemonDessert from '../assets/lemon dessert.jpg';
import {MdDeliveryDining} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Highlights() {
  return (
    <section className='highlights'>
        <div className='title-wrapper'>
          <h2>This weeks specials!</h2>
          <button className='menu-button' aria-label='On Click'><Link to='./menu'>Online Menu</Link></button>
        </div>
        <div className='dishes'>
          <div className='dish'>
            <img src={salad} alt='greek salad' className='dish-photo'/>
            <div className='dish-details'>
            <div className='wrap-name-price'>
                <h5>Greek salad</h5>
                <span className='price'>$12.99</span>
              </div>
              <p className='dish-description'>The famous greek  salad of crispy lettuce, peppers, olives and our   Chicago style feta cheese, garnished with crunchy   garlic and rosemary croutons.</p>
              <div className='order'>Order a delivery<span className='bike-icon'><MdDeliveryDining /></span></div>
            </div>
          </div>
          <div className='dish'>
            <img src={bruchetta} alt='bruchetta' className='dish-photo'/>
            <div className='dish-details'>
              <div className='wrap-name-price'>
                <h5>Bruchetta</h5>
                <span className='price'>$5.99</span>
              </div>
              <p className='dish-description'>Our Bruschetta is   made from grilled bread that has been smeared with  garlic and seasoned with salt and olive oil.</p>
              <div className='order'>Order a delivery<span className='bike-icon'><MdDeliveryDining /></span></div>
            </div>
          </div>
          <div className='dish'>
            <img src={lemonDessert} alt='lemon dessert' className='dish-photo'/>
            <div className='dish-details'>
            <div className='wrap-name-price'>
                <h5>Lemon Dessert</h5>
                <span className='price'>$5.00</span>
              </div>
              <p className='dish-description'>This comes straight   from grandma's recipe book, every last ingredient   has been sourced and is as authentic as can be  imagined.</p>
              <div className='order'>Order a delivery<span className='bike-icon'><MdDeliveryDining /></span></div>
            </div>
          </div>
        </div>
    </section>
  )
}
