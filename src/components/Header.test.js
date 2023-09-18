import { render, screen } from '@testing-library/react';
import Header from './Header';

test('check the heading', () => {
    render(<Header />);
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });