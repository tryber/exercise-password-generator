import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';

describe('Testa o botão de gerar senha', () => {
  it('Verifica se ele está desabilitado ao renderizar a tela inicial', () => {
    renderWithRedux(<App />);

    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    expect(btnGenerate.disabled).toBeTruthy();
  });
});
