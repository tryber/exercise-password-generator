import React from 'react';
import { render, screen } from '../helpers/test-utils';
import App from '../App';

describe('Header tests', () => {
  it('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/password generator/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders placeholder text', () => {
    render(<App />);
    const placeholderText = screen.getByText(/click generate/i);
    expect(placeholderText).toBeInTheDocument();
  });
});
