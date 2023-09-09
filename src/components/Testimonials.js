import React from 'react';
import './testimonials.css';
import {BiSolidStar} from 'react-icons/bi';
import {BiSolidStarHalf} from 'react-icons/bi';
import customer1 from '../assets/maria';
import customer2 from '../assets/antony';
import customer3 from '../assets/tamika';
import customer4 from '../assets/brandon';


const customers = [
    {
        name: 'Maria Sanchez',
        image: customer1,
        rate: 4.5,
        review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    },
    {
        name: 'Antony Clifton',
        image: customer2,
        rate: 5,
        review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    },
    {
        name: 'Tamika Jackson',
        image: customer3,
        rate: 4.5,
        review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    },
    {
        name: 'Brandon Ming',
        image: customer4,
        rate: 4,
        review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    }
]


export default function Testimonials() {
  return (
    <section className='testimonials-box'>
        <div className='header'>
            <h2>What people say about us!</h2>
        </div>
        <div className='people'>
            {customers.map((customer) => {
                return <div className='customer' key={customer.name}>
                            <div className='customer-pic-name'>
                              <img src={customer.image} alt={customer.name} className='customer-photo'/>
                              <h5>{customer.name}</h5>
                            </div>
                            {customer.rate === 5 ? <div className='rate-stars'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div> : customer.rate === 4.5 ? <div className='rate-stars'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStarHalf /></div> : <div className='rate-stars'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>}
                            <p className='review-text'>{customer.review}</p>
                        </div>
            })}
        </div>
    </section>
  )
}
