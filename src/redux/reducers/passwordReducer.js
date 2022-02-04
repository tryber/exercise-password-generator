import { PASSWORD } from '../actions';

const INITIAL_STATE = {
  password: '',
};

const passwordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PASSWORD:
    return {
      ...state,
      password: action.value,
    };
  default:
    return state;
  }
};

export default passwordReducer;
