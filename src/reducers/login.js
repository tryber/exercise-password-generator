import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return action.value;
  default:
    return state;
  }
}

export default login;
