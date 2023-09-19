import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';
import BookingForm from './BookingForm';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const headerElement = screen.getByText('Table Reservation');
    expect(headerElement).toBeInTheDocument();
  });


  test('should update available booking time options when changing booking date', () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions =  screen.getAllByTestId('booking-time-option');
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions =  screen.getAllByTestId('booking-time-option');

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });



  test('should successfully submit form with default values', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const submitData = jest.fn();
      render(
        <BookingForm availableTimes={availableTimes} submitData={submitData} />
      );

      const submitButton = screen.getByLabelText('Submit');
      fireEvent.click(submitButton);

      expect(submitData).toHaveBeenCalledWith({
        date: today,
        time: availableTimes[0],
        guestsNumber: 1,
        occasion: 'Birthday',
      });
    });

