const INITIAL_STATE = {
  passwordLength: '16',
};

function lengthInput(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LENGTH':
    return action.value;
  default:
    return state;
  }
}

export default lengthInput;
