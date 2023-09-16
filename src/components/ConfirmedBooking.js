import React from 'react';
import './booking.css';
import {IoIosCheckmarkCircle} from 'react-icons/io';

export default function ConfirmedBooking() {
  return (
    <div className='confirmation'>
      <div className='confirm-icon'><IoIosCheckmarkCircle /></div>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  )
}
