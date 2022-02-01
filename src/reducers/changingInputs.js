const Initial_State = {
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
