import { WORD } from '../actions';

const INITIAL_STATE = {
  savedPassword: '',
};

function changingWord(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WORD:
    return action.value;
  default:
    return state;
  }
}

export default changingWord;
