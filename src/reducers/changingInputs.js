const Initial_State = {
  lengthInput: '16',
  firstChecked: false,
  secondChecked: false,
  thirdChecked: false,
  fourthChecked: false,
};

function changingInputs(state = Initial_State, action) {
  switch (action.type) {
    case 'INPUT':
      return action.value;
    default:
      return state;
  }
}

export default changingInputs;
