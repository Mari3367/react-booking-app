import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

import broccoliChickpeaSalad from '../assets/salads/broccoli-chickpea-pomegranate-salad.jpg';
import broccoliPastaSalad from '../assets/salads/broccoli-pasta-salad.jpg';
import creamyPestoChickenSalad from '../assets/salads/creamy-pesto-chicken-salad.jpg';

import spaghettiFruttiDiMare from '../assets/dishes/spaghetti frutti di mare.jpg';
import doubleDutyChickenWithOlivesAndArtichokes from '../assets/dishes/double-duty-chicken-with-olives-and-artichokes.jpg';
import fetaShrimpSkillet from '../assets/dishes/feta-shrimp-skillet.jpg';

import redWine from '../assets/wines/red-wine-poured-into-glass.jpg';
import wineCabernet from '../assets/wines/wine-cabernet-sauvignon.jpg';
import roseWine from '../assets/wines/rose-wine.jpg';

const salads = [
  {name: 'Broccoli Chickpea Pomegranate Salad', image: broccoliChickpeaSalad, id: 'broccoliChickpeaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.00'},
  {name: 'Broccoli Pasta Salad', image: broccoliPastaSalad, id: 'broccoliPastaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$11.00'},
  {name: 'Creamy Pesto Chicken Salad', image: creamyPestoChickenSalad, id: 'creamyPestoChickenSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'}
];

const dishes = [
  {name: 'Spaghetti Frutti di Mare', image: spaghettiFruttiDiMare, id: 'spaghettiFruttiDiMare', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.00'},
  {name: 'Double-Duty Chicken with Olives and Artichokes', image: doubleDutyChickenWithOlivesAndArtichokes, id: 'doubleDutyChickenWithOlivesAndArtichokes', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$15.99'},
  {name: 'Feta Shrimp Skillet', image: fetaShrimpSkillet, id: 'fetaShrimpSkillet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'}
];

const wines = [
  {name: 'Red Wine', image: redWine, id: 'redWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.99'},
  {name: 'Red Wine Cabernet', image: wineCabernet, id: 'wineCabernet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
  {name: 'Rose Wine', image: roseWine, id: 'roseWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'}
];



export default function Menu() {
  return (
    <section className='menu'>
      <h1 className='menu-heading'>Salads</h1>
      <div className='menuSalads menu-section'>
        {salads.map((salad) => {
          return <img src={salad.image} alt={salad.name} key={salad.id}/>
        })}
        <button className='see-more'><Link to='./salads' style={{color:'black'}}>See More</Link></button>
      </div>
      <h1 className='menu-heading'>Dishes</h1>
      <div className='menuDishes menu-section'>
        {dishes.map((dish) => {
          return <img src={dish.image} alt={dish.name} key={dish.id}/>
        })}
        <button className='see-more'><Link to='./dishes' style={{color:'black'}}>See More</Link></button>
      </div>
      <h1 className='menu-heading'>Wines</h1>
      <div className='menuWines menu-section'>
        {wines.map((wine) => {
          return <img src={wine.image} alt={wine.name} key={wine.id}/>
        })}
        <button className='see-more'><Link to='./wines' style={{color:'black'}}>See More</Link></button>
      </div>
    </section>
  )
}
