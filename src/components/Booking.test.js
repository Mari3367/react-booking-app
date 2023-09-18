import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const headerElement = screen.getByText('Table Reservation');
    expect(headerElement).toBeInTheDocument();
  });
