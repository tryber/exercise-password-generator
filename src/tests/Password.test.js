import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';
import caracters from '../data/caracters';

describe('Testa o tamanho da senha', () => {
  it('Verifica se a senha é gerada como o tamanho de 17 caracteres', () => {
    const length = 17;
    renderWithRedux(<App />, { initialState: { lengthPasswordReducer: {
      length } } });

    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    userEvent.click(optionUppercase);
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });
    userEvent.click(btnGenerate);
    const password = screen.getByTestId('password');
    expect(password.innerHTML).toHaveLength(length);
  });

  it('Verifica se a senha é gerada como o tamanho de 4 caracteres', () => {
    const length = 4;
    renderWithRedux(<App />);

    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    userEvent.click(optionUppercase);
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });
    userEvent.click(btnGenerate);
    const password = screen.getByTestId('password');
    expect(password.innerHTML).toHaveLength(length);
  });

  it('Verifica se a senha é gerada como o tamanho de 20 caracteres', () => {
    const length = 20;
    renderWithRedux(<App />, { initialState: { lengthPasswordReducer: {
      length } } });

    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    userEvent.click(optionUppercase);
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });
    userEvent.click(btnGenerate);
    const password = screen.getByTestId('password');
    expect(password.innerHTML).toHaveLength(length);
  });
});

describe('Verifica os caracteres da senha', () => {
  it('Verifica se todos os caracteres são maiúsculas', () => {
    renderWithRedux(<App />);

    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionUppercase);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const composePassword = password.innerHTML.split('');
    const validation = composePassword
      .every((character) => character === character.toUpperCase());
    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são minúsculos', () => {
    renderWithRedux(<App />);

    const optionLowercase = screen.getByRole('checkbox', { name: /Include Lowercase/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionLowercase);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const composePassword = password.innerHTML.split('');
    const validation = composePassword
      .every((character) => character === character.toLowerCase());
    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são números', () => {
    renderWithRedux(<App />);

    const optionNumbers = screen.getByRole('checkbox', { name: /Include Numbers/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionNumbers);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const composePassword = password.innerHTML.split('');
    const validation = composePassword
      .every((character) => caracters.numbers.includes(character));
    expect(validation).toBeTruthy();
  });

  it('Verifica se todos os caracteres são símbolos', () => {
    renderWithRedux(<App />);

    const optionSymbols = screen.getByRole('checkbox', { name: /Include Symbols/i });
    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    userEvent.click(optionSymbols);
    userEvent.click(btnGenerate);

    const password = screen.getByTestId('password');
    const composePassword = password.innerHTML.split('');
    const validation = composePassword
      .every((character) => caracters.symbols.includes(character));
    expect(validation).toBeTruthy();
  });
});
