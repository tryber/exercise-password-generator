import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';
import caracters from '../data/caracters';

describe('Verifica os caracteres da senha', () => {
  beforeEach(() => {
    renderWithRedux(<App />);
  });

  it('Verifica se todos os caracteres são maiúsculas', () => {
    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionUppercase);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordCompose = password.innerHTML.split('');
    const validation = passwordCompose
      .every((character) => character === character.toUpperCase());

    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são minúsculos', () => {
    const optionLowercase = screen.getByRole('checkbox', { name: /Include Lowercase/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionLowercase);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordCompose = password.innerHTML.split('');
    const validation = passwordCompose
      .every((character) => character === character.toLowerCase());

    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são números', () => {
    const optionNumbers = screen.getByRole('checkbox', { name: /Include Numbers/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionNumbers);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordCompose = password.innerHTML.split('');
    const validation = passwordCompose
      .every((character) => caracters.numbers.includes(character));

    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são símbolos', () => {
    const optionSymbols = screen.getByRole('checkbox', { name: /Include Symbols/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionSymbols);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordCompose = password.innerHTML.split('');
    const validation = passwordCompose
      .every((character) => caracters.symbols.includes(character));

    expect(validation).toBeTruthy();
  });
});
