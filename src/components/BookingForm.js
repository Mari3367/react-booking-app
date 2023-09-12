import React from 'react';
import './bookingform.css';
import {useState} from 'react';

const availableTimes  = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export default function BookingForm() {

  const [time, setTime] = useState(availableTimes[0]);

  function handleTime(e) {
    setTime(e.target.value);
  }

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  function handleDate(e) {
    setDate(e.target.value);
  }

  const [guestNum, setGuestNum] = useState(1);
  function handleGuestsNum(e) {
    setGuestNum(e.target.value);
    console.log(guestNum);
  }

  const select = (e) => {
    const dropdown = document.querySelector('.occasions-dropdown');
    dropdown.classList.toggle('active');
    const option = e.target.innerText;
    const textbox = document.querySelector('.selected-event');
    textbox.innerText = option;
    if(e.target.classList.contains('occasion')){
      dropdown.classList.add('selected');
    }
  }

  return (
        <form className='booking-form'>
            <label htmlFor='booking-date'>Date</label>
            <input type='date' id='booking-date' defaultValue={date} onChange={handleDate} required/>
            <label htmlFor='booking-time'>Time</label>
            <select className='times' onChange={handleTime}>
              {availableTimes.map((booktime) => {
                return <option key={booktime}>{booktime}</option>
              })}
            </select>
            <label htmlFor='guestsNumber'>Number of guests</label>
            <input type='number' id='guestsNumber' min='1' max='10' placeholder={guestNum} onChange={handleGuestsNum}/>
              <label htmlFor='occasions'>Occasion</label>
              <select id='occasions'>
                <option className='occasion' onClick={select}>Birthday</option>
                <option className='occasion' onClick={select}>Engagement</option>
                <option className='occasion' onClick={select}>Anniversary</option>
              </select>
            <button type='submit' className='form-btn'>Make your reservation</button>
        </form>
  )
}
