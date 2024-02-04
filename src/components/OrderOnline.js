import React from 'react';
import './orderOnline.css';
import { useState } from 'react';
import { useRef } from 'react';

import spaghettiFruttiDiMare from '../assets/dishes/spaghetti frutti di mare.jpg';
import doubleDutyChickenWithOlivesAndArtichokes from '../assets/dishes/double-duty-chicken-with-olives-and-artichokes.jpg';
import fetaShrimpSkillet from '../assets/dishes/feta-shrimp-skillet.jpg';
import fillet from '../assets/dishes/fillet.jpg';
import fishAndShrimp from '../assets/dishes/fish-and-shrimp.jpg';
import greekStyleBeefPita from '../assets/dishes/greek-style-beef-pita.jpg';
import meatballs from '../assets/dishes/meatballs.jpg';
import farfallePasta from '../assets/dishes/pasta.jpg';
import spinachFetaPinwheels from '../assets/dishes/spinach-feta-pinwheels.jpg';
import broccoliChickpeaSalad from '../assets/salads/broccoli-chickpea-pomegranate-salad.jpg';
import broccoliPastaSalad from '../assets/salads/broccoli-pasta-salad.jpg';
import creamyPestoChickenSalad from '../assets/salads/creamy-pesto-chicken-salad.jpg';
import figAndGoatCheeseSalad from '../assets/salads/fig-and-goat-cheese-salad.jpg';
import greekSalad from '../assets/salads/greek-salad.jpg';
import mediterraneanQuinoaSalad from '../assets/salads/mediterranean-quinoa-salad.jpg';
import spiralizedBeetSalad from '../assets/salads/spiralized-beet-salad.jpg';
import tortelliniSalad from '../assets/salads/tortellini-salad.jpg';
import whiteBeanSalad from '../assets/salads/white-bean-salad.jpg';
import redWine from '../assets/wines/red-wine-poured-into-glass.jpg';
import wineCabernet from '../assets/wines/wine-cabernet-sauvignon.jpg';
import roseWine from '../assets/wines/rose-wine.jpg';
import watermelonWine from '../assets/wines/watermelon-wine.jpg';
import whiteWine from '../assets/wines/white-wine.jpg';
import whiteDryWine from '../assets/wines/wine-dry-white.jpg';

const menuItems = [
{name: 'Spaghetti Frutti di Mare', image: spaghettiFruttiDiMare, id: 'spaghettiFruttiDiMare', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.00'},
{name: 'Double-Duty Chicken with Olives and Artichokes', image: doubleDutyChickenWithOlivesAndArtichokes, id: 'doubleDutyChickenWithOlivesAndArtichokes', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$15.99'},
{name: 'Feta Shrimp Skillet', image: fetaShrimpSkillet, id: 'fetaShrimpSkillet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'},
{name: 'Fillet', image: fillet, id: 'fillet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'Fish and Shrimp', image: fishAndShrimp, id: 'fishAndShrimp', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$15.00'},
{name: 'Greek-Style Beef Pita', image: greekStyleBeefPita, id: 'greekStyleBeefPita', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$16.00'},
{name: 'Meatballs', image: meatballs, id: 'meatballs', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'Farfalle Pasta', image: farfallePasta, id: 'farfallePasta', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.00'},
{name: 'Spinach Feta Pinwheels', image: spinachFetaPinwheels, id: 'spinachFetaPinwheels', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
{name: 'Broccoli Chickpea Pomegranate Salad', image: broccoliChickpeaSalad, id: 'broccoliChickpeaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.00'},
{name: 'Broccoli Pasta Salad', image: broccoliPastaSalad, id: 'broccoliPastaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$11.00'},
{name: 'Creamy Pesto Chicken Salad', image: creamyPestoChickenSalad, id: 'creamyPestoChickenSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'},
{name: 'Fig and Goat Cheese Salad', image: figAndGoatCheeseSalad, id: 'figAndGoatCheeseSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
{name: 'Greek Salad', image: greekSalad, id: 'greekSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
{name: 'Mediterranean Quinoa Salad', image: mediterraneanQuinoaSalad, id: 'mediterraneanQuinoaSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.99'},
{name: 'Spiralized Beet Salad', image: spiralizedBeetSalad, id: 'spiralizedBeetSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.',  price: '$12.99'},
{name: 'Tortellini Salad', image: tortelliniSalad, id: 'tortelliniSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'White Bean Salad', image: whiteBeanSalad, id: 'whiteBeanSalad', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$8.00'},
{name: 'Red Wine', image: redWine, id: 'redWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$10.99'},
{name: 'Red Wine Cabernet', image: wineCabernet, id: 'wineCabernet', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
{name: 'Rose Wine', image: roseWine, id: 'roseWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'Watermelon Wine', image: watermelonWine, id: 'watermelonWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$12.99'},
{name: 'White Wine', image: whiteWine, id: 'whiteWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$13.99'},
{name: 'White Dry Wine', image: whiteDryWine, id: 'whiteDryWine', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit purus nec mollis finibus. Aliquam vehicula sagittis quam, id tempor dui placerat in. In commodo metus vel sem faucibus volutpat. Donec a vulputate nunc, volutpat volutpat lacus. Praesent lobortis vehicula sapien vitae cursus. Donec ut quam sed enim pulvinar efficitur. Phasellus ut viverra arcu.', price: '$14.99'},
];



export default function OrderOnline() {
    const [items, setItems] = useState(menuItems);
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase());
    })

    const menuContainer = useRef();
    const menuWrapper = useRef();


    function handleChange (e) {
        setQuery(e.target.value);
        if(menuWrapper.current.hasChildNodes()) {
            menuContainer.current.style.height = 'auto'
        } else {
            menuContainer.current.style.height = '100vh'
        }
    }


   return (
    <section className='menu-items-container' ref={menuContainer}>
        <div className='search-wrapper'>
            <input type='search' id='search' value={query} onChange={handleChange}/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='search-icon'>
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
        </div>
        <div className='menu-items-wrapper' ref={menuWrapper}>
            {filteredItems.map((item) => {
                return <div className='menuItem' key={item.id}>
                    <img src={item.image} alt='menu item' className='menu-item-img'/>
                    <h1>{item.name}</h1>
                </div>
            })}
        </div>
    </section>
  )
}
