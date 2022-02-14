import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';

describe('Testa os Checkbox', () => {
  it('Verifica se ao renderizar a tela os checkbox vem desmarcado', () => {
    renderWithRedux(<App />);

    const optionsCheckbox = screen.getAllByRole('checkbox');
    optionsCheckbox.forEach((option) => {
      expect(option.checked).toBeFalsy();
    });
  });

  it('Verifica se ao clicar no checkbox ele fica marcado', () => {
    renderWithRedux(<App />);

    const optionsCheckbox = screen.getAllByRole('checkbox');
    optionsCheckbox.forEach((option) => {
      userEvent.click(option);
      expect(option.checked).toBeTruthy();
      userEvent.click(option);
      expect(option.checked).toBeFalsy();
    });
  });
});
