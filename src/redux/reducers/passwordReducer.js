const INITIAL_STATE = {
  password: '',
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default: return state;
  }
};
