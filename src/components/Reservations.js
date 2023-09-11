import React from 'react';
import './reservations.css';
import {IoIosArrowDown} from 'react-icons/io';
import {LiaGlassCheersSolid} from 'react-icons/lia';


export default function Reservations() {

  // function addSelected() {
  //   const dropdown = document.querySelector('.dropdown');
  //   dropdown.classList.add('selected');
  // }

  const select = (e) => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
    const option = e.target.innerText;
    const textbox = document.querySelector('.selected-event');
    textbox.innerText = option;
    if(e.target.classList.contains('option')){
      dropdown.classList.add('selected');
    }
  }


  return (
    <section className='reservation'>
      <div className='reservation-title-wrap'>
        <h1 className='reservation-title'>Table Reservation</h1>
      </div>
      <form className='reservation-form'>
        <label htmlFor='date'>Date</label>
        <input type='date' id='date' name='date' defaultValue={new Date().toISOString().substring(0, 10)} required/>
        <label htmlFor='time'>Time</label>
        <input type='time' id='time' name='time' defaultValue='17:00' required/>
        <label htmlFor='number'>Number of guests</label>
        <input type='number' id='number' name='number' min='1' max='10' placeholder='1'/>
        <div className='dropdown'>
          <div className='dropdown-textbox' onClick={select}>
            <span className='cheers'><LiaGlassCheersSolid /></span>
            <span className='selected-event'>Occasions</span>
            <span className='arrow'><IoIosArrowDown /></span>
          </div>
          <div className='options'>
            <div className='option' onClick={select}>Birthday</div>
            <div className='option' onClick={select}>Engagement</div>
            <div className='option' onClick={select}>Anniversary</div>
          </div>
        </div>
        <label htmlFor='requirements'>Special requirements</label>
        <textarea id='requirements' name='requirements' rows='4' cols='50'></textarea>
        <button type='submit' className='reservation-btn'>Make reservation</button>
      </form>
      {/*on submit show another for with customer credentials*/}
    </section>
  )
}
