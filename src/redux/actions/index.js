import {
  LENGTH,
  INCLUDE_UPPERCASE,
  INCLUDE_LOWERCASE,
  INCLUDE_NUMBERS,
  INCLUDE_SYMBOLS,
  GENERATE_PASSWORD,
} from './actionsTypes';

export const lengthAction = (value) => ({ type: LENGTH, value });
export const uppercaseAction = (value) => ({ type: INCLUDE_UPPERCASE, value });
export const lowercaseAction = (value) => ({ type: INCLUDE_LOWERCASE, value });
export const numbersAction = (value) => ({ type: INCLUDE_NUMBERS, value });
export const symbolsAction = (value) => ({ type: INCLUDE_SYMBOLS, value });
export const passwordAction = (value) => ({ type: GENERATE_PASSWORD, value });
