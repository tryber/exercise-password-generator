import { CHANGE_SETTINGS, GENERATE_PASSWORD } from '../actions';
import { lowerCaseLetters, numbers, symbols, upperCaseLetters } from './characters';

const INITIAL_STATE = {
  password: 'CLICK GENERATE',
  length: 4,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
};

const generatePassword = (settings) => {
  let password = [];

  if (settings.includeUppercase) password = [...password, ...lowerCaseLetters];
  if (settings.includeLowercase) password = [...password, ...upperCaseLetters];
  if (settings.includeNumbers) password = [...password, ...numbers];
  if (settings.includeSymbols) password = [...password, ...symbols];

  const shuffle = 0.5;
  password.sort(() => Math.random() - shuffle);
  password = password.join('').slice(0, settings.length);

  return password;
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SETTINGS:
    return {
      ...state,
      [action.name]: action.value,
    };
  case GENERATE_PASSWORD:
    return {
      ...state,
      password: generatePassword(state),
    };
  default:
    return state;
  }
};

export default settings;
