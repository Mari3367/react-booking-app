import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '17:30'];
const today = new Date().toISOString().split('T')[0];
const submitData = jest.fn();
const dispatchOnDateChange = jest.fn();


test('renders the BookingForm heading', () => {
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
    const bookingDate = '2023-09-01';
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


    test(
      `should display an error message and disable sumbit button if date
      field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );

      const dateInput = screen.getByLabelText(/Date/);
      fireEvent.change(dateInput, { target: { value: '' } });
      fireEvent.blur(dateInput);
      const errorMessage = screen.getByTestId('error-message');
      const submitButton = screen.getByLabelText('Submit');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please choose a valid date');
      expect(submitButton).toBeDisabled();
    });


    test(
      `should display an error message and disable sumbit button if
      guests field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );

      const guestsNumberInput = screen.getByLabelText(/Number of guests/);
      fireEvent.change(guestsNumberInput, { target: { value: '' } });
      fireEvent.blur(guestsNumberInput);
      const errorMessage = screen.getByTestId('error-message');
      const submitButton = screen.getByLabelText('Submit');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
      expect(submitButton).toBeDisabled();
    });



    test('should correctly render all form fields and their default values', async () => {
      render(
        <BookingForm availableTimes={availableTimes} submitData={submitData} />
      );

      const dateInput = screen.getByLabelText(/Date/);
      const timeSelect = screen.getByLabelText(/Time/);
      const timeOptions = await screen.findAllByTestId('booking-time-option');
      const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
      const occasionSelect = screen.getByLabelText(/Occasion/);
      const occasionOptions = await screen.findAllByTestId(`booking-occasion-option`);
      const submitButton = screen.getByLabelText('Submit');

      expect(dateInput).toBeInTheDocument();
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('id', 'booking-date');
      expect(dateInput).toHaveValue(today);

      expect(timeSelect).toBeInTheDocument();
      expect(timeSelect).toHaveAttribute('id', 'booking-time');
      expect(timeOptions.length).toBe(2);

      expect(numberOfGuestsInput).toBeInTheDocument();
      expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-number-guests');
      expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
      expect(numberOfGuestsInput).toHaveValue(1);

      expect(occasionSelect).toBeInTheDocument();
      expect(occasionSelect).toHaveAttribute('id', 'booking-occasions');
      expect(occasionOptions.length).toBe(3);

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
      expect(submitButton).toBeEnabled();
    });


