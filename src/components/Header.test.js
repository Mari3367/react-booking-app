import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('check the heading', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });