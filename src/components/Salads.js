import React from 'react';
import './salads.css';
import broccoliChickpeaSalad from '../assets/salads/broccoli-chickpea-pomegranate-salad.jpg';
import broccoliPastaSalad from '../assets/salads/broccoli-pasta-salad.jpg';
import creamyPestoChickenSalad from '../assets/salads/creamy-pesto-chicken-salad.jpg';
import figAndGoatCheeseSalad from '../assets/salads/fig-and-goat-cheese-salad.jpg';
import greekSalad from '../assets/salads/greek-salad.jpg';
import mediterraneanQuinoaSalad from '../assets/salads/mediterranean-quinoa-salad.jpg';
import spiralizedBeetSalad from '../assets/salads/spiralized-beet-salad.jpg';
import tortelliniSalad from '../assets/salads/tortellini-salad.jpg';
import whiteBeanSalad from '../assets/salads/white-bean-salad.jpg';

const salads = [
  {name: 'Broccoli Chickpea Pomegranate Salad', image: broccoliChickpeaSalad, id: 'broccoliChickpeaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.00'},
  {name: 'Broccoli Pasta Salad', image: broccoliPastaSalad, id: 'broccoliPastaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$11.00'},
  {name: 'Creamy Pesto Chicken Salad', image: creamyPestoChickenSalad, id: 'creamyPestoChickenSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'},
  {name: 'Fig and Goat Cheese Salad', image: figAndGoatCheeseSalad, id: 'figAndGoatCheeseSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
  {name: 'Greek Salad', image: greekSalad, id: 'greekSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
  {name: 'Mediterranean Quinoa Salad', image: mediterraneanQuinoaSalad, id: 'mediterraneanQuinoaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.99'},
  {name: 'Spiralized Beet Salad', image: spiralizedBeetSalad, id: 'spiralizedBeetSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.',  price: '$12.99'},
  {name: 'Tortellini Salad', image: tortelliniSalad, id: 'tortelliniSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
  {name: 'White Bean Salad', image: whiteBeanSalad, id: 'whiteBeanSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$8.00'},

]

export default function Salads() {
  return (
    <div className='salads-wrapper'>
        <h1 className='salads-heading'>Our Salads</h1>
        <div className='salads'>
        {salads.map((salad) => {
            return <div className='salad' key={salad.id}>
                <img src={salad.image} alt={salad.name}/>
                <h2 className='salad-title'>{salad.name}</h2>
                <p className='salad-details'>{salad.details}</p>
              <div className='cart-price-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none" className='basket'>
                <path d="M39.7273 28.5378V35.095H46V39.4665H39.7273V46.0238H35.5455V39.4665H29.2727V35.095H35.5455V28.5378H39.7273ZM23 24.1663C20.7 24.1663 18.8182 26.1335 18.8182 28.5378C18.8182 30.9421 20.7 32.9093 23 32.9093C25.3 32.9093 27.1818 30.9421 27.1818 28.5378C27.1818 26.1335 25.3 24.1663 23 24.1663ZM25.8227 41.6523H9.40909C7.48545 41.6523 5.87545 40.2971 5.39455 38.4611L0.0836363 18.1992C-7.45058e-08 18.0025 0 17.8058 0 17.6091C0 16.4069 0.940909 15.4233 2.09091 15.4233H12.1064L21.2645 1.10669C21.6618 0.472827 22.3309 0.123108 23 0.123108C23.6691 0.123108 24.3382 0.472827 24.7355 1.08484L33.8936 15.4233H43.9091C45.0591 15.4233 46 16.4069 46 17.6091L45.9373 18.1992L43.9091 25.9368C42.7173 25.2592 41.3791 24.6909 39.9782 24.4067L41.1909 19.7948H4.83L9.40909 37.2808H25.0909C25.0909 38.8108 25.3627 40.2752 25.8227 41.6523ZM17.1455 15.4233H28.8545L23 6.2432L17.1455 15.4233Z" fill="#495E57"/>
              </svg>
              <span className='salad-price'>{salad.price}</span>
              </div>
            </div>
        })}
    </div>
    </div>
  )
}
