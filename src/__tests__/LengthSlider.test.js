import React from 'react';
import { render, screen, fireEvent } from '../helpers/test-utils';
import App from '../App';

describe('Length slider tests', () => {
  it('renders length slider', () => {
    render(<App />);
    const lengthSliderElement = screen.getByLabelText(/length: 4/i);
    expect(lengthSliderElement).toBeInTheDocument();
  });

  it('changes the "length" value correctly after changing the slider value', () => {
    render(<App />);
    const newValue = '5';
    const lengthSliderElement = screen.getByLabelText(/length: 4/i);
    fireEvent.change(lengthSliderElement, { target: { value: newValue } });
    expect(lengthSliderElement).toHaveValue(newValue);
    const labelWithNewValue = screen.getByText(/length: 5/i);
    expect(labelWithNewValue).toBeInTheDocument();
  });
});
