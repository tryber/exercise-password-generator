import { CHANGE_SETTINGS } from '../actions';

const INITIAL_STATE = {
  length: 4,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SETTINGS:
    return {
      ...state,
      [action.name]: action.value,
    };
  default:
    return state;
  }
};

export default settings;
