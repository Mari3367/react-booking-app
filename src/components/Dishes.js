import React from 'react';
import './dishes.css';
import spaghettiFruttiDiMare from '../assets/dishes/spaghetti frutti di mare.jpg';
import doubleDutyChickenWithOlivesAndArtichokes from '../assets/dishes/double-duty-chicken-with-olives-and-artichokes.jpg';
import fetaShrimpSkillet from '../assets/dishes/feta-shrimp-skillet.jpg';
import fillet from '../assets/dishes/fillet.jpg';
import fishAndShrimp from '../assets/dishes/fish-and-shrimp.jpg';
import greekStyleBeefPita from '../assets/dishes/greek-style-beef-pita.jpg';
import meatballs from '../assets/dishes/meatballs.jpg';
import farfallePasta from '../assets/dishes/pasta.jpg';
import spinachFetaPinwheels from '../assets/dishes/spinach-feta-pinwheels.jpg';

const dishes = [
{name: 'Spaghetti Frutti di Mare', image: spaghettiFruttiDiMare, id: 'spaghettiFruttiDiMare', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.00'},
{name: 'Double-Duty Chicken with Olives and Artichokes', image: doubleDutyChickenWithOlivesAndArtichokes, id: 'doubleDutyChickenWithOlivesAndArtichokes', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$15.99'},
{name: 'Feta Shrimp Skillet', image: fetaShrimpSkillet, id: 'fetaShrimpSkillet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'},
{name: 'Fillet', image: fillet, id: 'fillet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'Fish and Shrimp', image: fishAndShrimp, id: 'fishAndShrimp', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$15.00'},
{name: 'Greek-Style Beef Pita', image: greekStyleBeefPita, id: 'greekStyleBeefPita', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$16.00'},
{name: 'Meatballs', image: meatballs, id: 'meatballs', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'Farfalle Pasta', image: farfallePasta, id: 'farfallePasta', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.00'},
{name: 'Spinach Feta Pinwheels', image: spinachFetaPinwheels, id: 'spinachFetaPinwheels', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
];


export default function Dishes() {
  return (
    <div className='menu-dishes-wrapper'>
        <h1 className='menu-dishes-heading'>Main Dishes</h1>
        <div className='menu-dishes'>
        {dishes.map((dish) => {
            return <div className='menu-dish' key={dish.id}>
                <img src={dish.image} alt={dish.name}/>
                <h2 className='menu-dish-title'>{dish.name}</h2>
                <p className='menu-dish-details'>{dish.details}</p>
              <div className='cart-price-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none" className='basket'>
                <path d="M39.7273 28.5378V35.095H46V39.4665H39.7273V46.0238H35.5455V39.4665H29.2727V35.095H35.5455V28.5378H39.7273ZM23 24.1663C20.7 24.1663 18.8182 26.1335 18.8182 28.5378C18.8182 30.9421 20.7 32.9093 23 32.9093C25.3 32.9093 27.1818 30.9421 27.1818 28.5378C27.1818 26.1335 25.3 24.1663 23 24.1663ZM25.8227 41.6523H9.40909C7.48545 41.6523 5.87545 40.2971 5.39455 38.4611L0.0836363 18.1992C-7.45058e-08 18.0025 0 17.8058 0 17.6091C0 16.4069 0.940909 15.4233 2.09091 15.4233H12.1064L21.2645 1.10669C21.6618 0.472827 22.3309 0.123108 23 0.123108C23.6691 0.123108 24.3382 0.472827 24.7355 1.08484L33.8936 15.4233H43.9091C45.0591 15.4233 46 16.4069 46 17.6091L45.9373 18.1992L43.9091 25.9368C42.7173 25.2592 41.3791 24.6909 39.9782 24.4067L41.1909 19.7948H4.83L9.40909 37.2808H25.0909C25.0909 38.8108 25.3627 40.2752 25.8227 41.6523ZM17.1455 15.4233H28.8545L23 6.2432L17.1455 15.4233Z" fill="#495E57"/>
              </svg>
              <span className='menu-dish-price'>{dish.price}</span>
              </div>
            </div>
        })}
        </div>
    </div>
  )
}
