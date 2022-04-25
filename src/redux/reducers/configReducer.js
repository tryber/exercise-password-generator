import {
  LENGTH,
  INCLUDE_UPPERCASE,
  INCLUDE_LOWERCASE,
  INCLUDE_NUMBERS,
  INCLUDE_SYMBOLS,
  GENERATE_PASSWORD,
} from '../actions/actionsTypes';

const INITIAL_STATE = {
  LENGTH: 16,
  INCLUDE_UPPERCASE: true,
  INCLUDE_LOWERCASE: true,
  INCLUDE_NUMBERS: true,
  INCLUDE_SYMBOLS: true,
  GENERATE_PASSWORD: 'empty',
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LENGTH:
    return { ...state, LENGTH: action.value };
  case INCLUDE_UPPERCASE:
    return { ...state, INCLUDE_UPPERCASE: action.value };
  case INCLUDE_LOWERCASE:
    return { ...state, INCLUDE_LOWERCASE: action.value };
  case INCLUDE_NUMBERS:
    return { ...state, INCLUDE_NUMBERS: action.value };
  case INCLUDE_SYMBOLS:
    return { ...state, INCLUDE_SYMBOLS: action.value };
  case GENERATE_PASSWORD:
    return { ...state, GENERATE_PASSWORD: action.value };
  default:
    return state;
  }
};

export default configReducer;
