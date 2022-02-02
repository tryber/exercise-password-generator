import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
});

test('Verifica se existe o titulo "Password Generator"', () => {
  const title = screen.getByRole('heading', { name: /password generator/i })
  const tamanho = "Password Generator".length;
  expect(title.innerHTML.length).toBe(tamanho);
  expect(title).toBeInTheDocument();
});

test('Verifica se existe o botao com o texto "Click Generate"', () => {
  const btn = screen.getByText(/click generate/i);
  const tamanho = "Click Generate".length;
  expect(btn.innerHTML.length).toBe(tamanho);
  expect(btn).toBeInTheDocument();
});

test('Verifica se ao carregar a página existe o texto "GENERATE PASSWORD"', () => {
  const textGenerate = screen.getByText(/generate password/i);
  const tamanho = "GENERATE PASSWORD".length;
  expect(textGenerate.innerHTML.length).toBe(tamanho);
  expect(textGenerate).toBeInTheDocument();
});

test('Verifica se existe uma label com o texto "Include Uppercase"', () => {
  const include = screen.getByLabelText(/include uppercase/i);
  const tamanho = "Include Uppercase".length;
  console.log(include.id);
  expect(include.id.length).toBe(tamanho);
  expect(include).toBeInTheDocument();
});
