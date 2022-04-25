import { CHANGE_CHECKBOX, CHANGE_LENGTH, GENERATE_PASSWORD } from '../actions';

const passwordGenerator = (length, { uppercase, lowercase, numbers, symbols }) => {
  const upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerList = 'abcdefghijklmnopqrstuvwxyz';
  const numList = '123456789';
  const symbolList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  const finalList = `${uppercase ? upperList : ''}\
${lowercase ? lowerList : ''}\
${numbers ? numList : ''}\
${symbols ? symbolList : ''}`;

  let finalPassword = '';

  while (finalPassword.length < parseInt(length, 10)) {
    finalPassword += finalList[Math.floor(Math.random() * finalList.length)];
  }

  return finalPassword;
};

const INITIAL_STATE = {
  password: '',
  length: '16',
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_LENGTH: return { ...state, length: action.length };
  case CHANGE_CHECKBOX: return { ...state, [action.field]: action.value };
  case GENERATE_PASSWORD: return {
    ...state,
    password: passwordGenerator(
      state.length,
      {
        uppercase: state.uppercase,
        lowercase: state.lowercase,
        numbers: state.numbers,
        symbols: state.symbols,
      },
    ),
  };
  default: return state;
  }
};
