import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';

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
