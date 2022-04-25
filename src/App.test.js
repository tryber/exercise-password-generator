import { render, screen } from '@testing-library/react';
import App from './App';

describe('Header tests', () => {
  it('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/password generator/i);
    expect(headerElement).toBeInTheDocument();
  });
});
