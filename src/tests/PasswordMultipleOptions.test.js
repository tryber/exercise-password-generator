import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';
import caracters from '../data/caracters';
import convert from '../helpers/convertSymbols';

describe('Testa se a senha inclui as opções desejadas', () => {
  beforeEach(() => {
    renderWithRedux(<App />);
  });

  it('Verifica se a senha inclui maiúsculas e minúsculas', () => {
    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    const optionLowercase = screen.getByRole('checkbox', { name: /Include Lowercase/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionUppercase);
    userEvent.click(optionLowercase);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordCompose = password.innerHTML.split('');
    const chosenOptions = passwordCompose
      .every((character) => caracters.uppercase.includes(character)
      || caracters.lowercase.includes(character));

    expect(chosenOptions).toBeTruthy();

    const unchosenOptions = passwordCompose
      .every((character) => caracters.numbers.includes(character)
      || caracters.symbols.includes(character));

    expect(unchosenOptions).toBeFalsy();
  });

  it('Verifica se a senha inclui símbolos e números', () => {
    const optionNumbers = screen.getByRole('checkbox', { name: /Include Numbers/i });
    const optionSymbols = screen.getByRole('checkbox', { name: /Include Symbols/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionNumbers);
    userEvent.click(optionSymbols);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const passwordConverted = convert(password.innerHTML);
    const passwordCompose = passwordConverted.split('');

    const chosenOptions = passwordCompose
      .every((character) => caracters.symbols.includes(character)
      || caracters.numbers.includes(character));

    expect(chosenOptions).toBeTruthy();

    const unchosenOptions = passwordCompose
      .every((character) => caracters.uppercase.includes(character)
      || caracters.lowercase.includes(character));

    expect(unchosenOptions).toBeFalsy();
  });

  it('Verifica se a senha inclui todas as opções', () => {
    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    const optionLowercase = screen.getByRole('checkbox', { name: /Include Lowercase/i });
    const optionNumbers = screen.getByRole('checkbox', { name: /Include Numbers/i });
    const optionSymbols = screen.getByRole('checkbox', { name: /Include Symbols/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionUppercase);
    userEvent.click(optionLowercase);
    userEvent.click(optionNumbers);
    userEvent.click(optionSymbols);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');

    const { uppercase, lowercase, numbers, symbols } = caracters;
    const options = [uppercase, lowercase, numbers, symbols];

    const validation = options.every((option) => (
      option.some((character) => password.innerHTML.includes(character))
    ));

    expect(validation).toBeTruthy();
  });
});
