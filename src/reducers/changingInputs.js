const INITIAL_STATE = {
  firstChecked: false,
  secondChecked: false,
  thirdChecked: false,
  fourthChecked: false,
};

function changingInputs(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INPUT':
    return action.value;
  default:
    return state;
  }
}

export default changingInputs;
