const INITIAL_STATE = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};

const checkboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default checkboxReducer;
