import React from 'react';
import './bookingpage.css';
import BookingForm from './BookingForm';

export default function BookingPage() {

  return (
    <section className='booking-page'>
         <div className='booking-title-wrapper'>
            <h1 className='booking-title'>Table Reservation</h1>
        </div>
        <BookingForm />
    </section>

    /*testing*/
    // <section className="booking-page">
    //   <label htmlFor={htmlFor}>{label}</label>
    //   {children}
    // </section>
  )
}
