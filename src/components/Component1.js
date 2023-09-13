import React from 'react';
import './component.css';
import Component2 from './Component2';
import {useState} from 'react';

const availableTimes = ['17:00', '17:30', '18:00']

const Component1 = () => {
  const initialDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minGuestsNumber = 1;
  const maxGuestsNumber = 10;
  const occasions = ['Birthday', 'Engagement', 'Anniversary'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage =
    'Please enter a number between 1 and 10';

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(defaultTime);
  const [
    guestsNumber,
    setGuestsNumber
  ] = useState(minGuestsNumber);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => guestsNumber !== '';
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () =>
    isDateValid()
    && isTimeValid()
    && isNumberOfGuestsValid()
    && isOccasionValid();
  
  const handleDateChange = e => {
    setDate(e.target.value);
    // dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   submitData({ date, time, numberOfGuests, occasion, });
  // };

  return (
  <div className='form-wrapper'>
      <div className='booking-header-wrap'>
        <h1 className='booking-title'>Table Reservation</h1>
      </div>
    <form className='bookingForm'>
      <Component2
        label="Date"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="booking-date"
          name="booking-date"
          min={initialDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </Component2>
      <Component2
        label="Time"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id="booking-time"
          name="booking-time"
          value={time}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map(bookingTime =>
            <option data-testid="booking-time-option" key={bookingTime}>
              {bookingTime}
            </option>
          )}
        </select>
      </Component2>
      <Component2
        label="Number of guests"
        htmlFor="booking-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="booking-number-guests"
          name="booking-number-guests"
          value={guestsNumber}
          min={minGuestsNumber}
          max={maxGuestsNumber}
          required={true}
          onChange={e => setGuestsNumber(e.target.value)}
        />
      </Component2>
      <Component2
        label="Occasion"
        htmlFor="booking-occasions"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          id="booking-occasions"
          name="booking-occasions"
          value={occasion}
          required={true}
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion =>
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </Component2>
        <button
          className="form-btn"
          type="submit"
          disabled={!areAllFieldsValid()}
        >
          Make your reservation
        </button>
    </form>
  </div>
  );
};

export default Component1;

