import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/reducers';

const upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerList = 'abcdefghijklmnopqrstuvwxyz';
const numList = '123456789';
const symbolList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const renderWithRedux = (component) => {
  const store = createStore(rootReducer);

  return {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>,
    ),
    store,
  };
};

test('Página contém o título "Password Generator"', () => {
  renderWithRedux(<App />);

  const title = screen.getByRole('heading', {
    name: /password generator/i, level: 1 });
  expect(title).toBeDefined();
});

test('Página contém um input do tipo range funcional', () => {
  renderWithRedux(<App />);

  const lengthRange = screen.getByLabelText(/length/i);
  const lengthText = screen.getByTestId('pass-length');
  expect(lengthRange).toBeDefined();
  expect(lengthText).toHaveTextContent('16');

  // Não dá pra mudar um range com o userEvent, pelas minhas pesquisas
  // Fonte: https://github.com/testing-library/user-event/issues/871#issuecomment-1059317998
  fireEvent.change(lengthRange, { target: { value: 7 } });
  expect(lengthText).toHaveTextContent('7');
});

test('Página contém quatro switches funcionais', () => {
  renderWithRedux(<App />);

  const upperCheck = screen.getByRole('switch', { name: /include uppercase/i });
  const lowerCheck = screen.getByRole('switch', { name: /include lowercase/i });
  const numCheck = screen.getByRole('switch', { name: /include numbers/i });
  const symbolsCheck = screen.getByRole('switch', { name: /include symbols/i });

  expect(upperCheck).toBeChecked();
  expect(lowerCheck).toBeChecked();
  expect(numCheck).toBeChecked();
  expect(symbolsCheck).not.toBeChecked();

  userEvent.click(upperCheck);
  userEvent.click(lowerCheck);
  userEvent.click(numCheck);
  userEvent.click(symbolsCheck);

  expect(upperCheck).not.toBeChecked();
  expect(lowerCheck).not.toBeChecked();
  expect(numCheck).not.toBeChecked();
  expect(symbolsCheck).toBeChecked();
});

test('Página contém um botão que gera uma senha nova, dentro das restrições', () => {
  renderWithRedux(<App />);

  const passList = [];

  const upperCheck = screen.getByRole('switch', { name: /include uppercase/i });
  const lowerCheck = screen.getByRole('switch', { name: /include lowercase/i });
  const numCheck = screen.getByRole('switch', { name: /include numbers/i });
  const symbolsCheck = screen.getByRole('switch', { name: /include symbols/i });

  const genPasswordBtn = screen.getByRole('button', { name: /generate password/i });
  const password = screen.getByTestId('password');
  expect(password).toHaveTextContent(/click generate/i);
  passList.push(password.textContent);

  userEvent.click(genPasswordBtn);
  expect(passList).not.toContain(password.textContent);
  [...password.textContent].forEach((char) => {
    expect(symbolList).not.toContain(char);
  });
  passList.push(password.textContent);

  userEvent.click(upperCheck);
  userEvent.click(lowerCheck);
  userEvent.click(numCheck);
  userEvent.click(symbolsCheck);

  userEvent.click(genPasswordBtn);
  expect(passList).not.toContain(password.textContent);
  [...password.textContent].forEach((char) => {
    expect(upperList).not.toContain(char);
    expect(lowerList).not.toContain(char);
    expect(numList).not.toContain(char);
  });
});
