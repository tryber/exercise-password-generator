const Initial_State = {
  passwordLength: '16',
};

function lengthInput(state = Initial_State, action) {
  switch (action.type) {
    case 'LENGTH':
      return action.value;
    default:
      return state;
  }
}

export default lengthInput;
