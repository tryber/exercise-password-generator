import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';

describe('Testa a tela inicial', () => {
  it('Verifica se tem um título', () => {
    renderWithRedux(<App />);

    const title = screen.getByRole('heading', { level: 1, name: /Password Generator/i });

    expect(title).toBeInTheDocument();
  });

  it('Verifica se tem o texto "CLICK GENERATE"', () => {
    renderWithRedux(<App />);

    const text = screen.getByText(/CLICK GENERATE/i);

    expect(text).toBeInTheDocument();
  });

  it('Verifica se existe a opção de escolher o tamanho', () => {
    renderWithRedux(<App />);

    const optionLength = screen.getByTestId('option-length');

    expect(optionLength).toBeInTheDocument();
  });

  it('Verifica se existe quatro checkbox', () => {
    renderWithRedux(<App />);

    const optionUppercase = screen.getByRole('checkbox', { name: /Include Uppercase/i });
    expect(optionUppercase).toBeInTheDocument();

    const optionLowercase = screen.getByRole('checkbox', { name: /Include Lowercase/i });
    expect(optionLowercase).toBeInTheDocument();

    const optionNumbers = screen.getByRole('checkbox', { name: /Include Numbers/i });
    expect(optionNumbers).toBeInTheDocument();

    const optionSymbols = screen.getByRole('checkbox', { name: /Include Symbols/i });
    expect(optionSymbols).toBeInTheDocument();
  });

  it('Verifica se existe a opção de escolher o tamanho', () => {
    renderWithRedux(<App />);

    const btnGenerate = screen.getByRole('button', { name: /GENERATE PASSWORD/i });

    expect(btnGenerate).toBeInTheDocument();
  });
});
