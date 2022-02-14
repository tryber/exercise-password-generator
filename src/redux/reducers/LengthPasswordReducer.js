import { LENGTH_PASSWORD } from '../actions';
import { LENGTH_CARACTER } from '../../constants';

const INITIAL_STATE = {
  length: LENGTH_CARACTER,
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
