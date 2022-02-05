import { LENGTH_PASSWORD } from '../actions';

const INITIAL_STATE = {
  length: 0,
};

const lengthPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LENGTH_PASSWORD:
    return {
      ...state,
      length: action.value,
    };

  default:
    return state;
  }
};

export default lengthPasswordReducer;
