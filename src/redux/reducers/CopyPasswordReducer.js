import { COPY_PASSWORD, COPIED_PASSWORD } from '../actions';

const INITIAL_STATE = {
  btnCopy: 'Copy',
};

const copyPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COPY_PASSWORD:
    return {
      ...state,
      btnCopy: 'Copy',
    };
  case COPIED_PASSWORD:
    return {
      ...state,
      btnCopy: 'Copied',
    };
  default:
    return state;
  }
};

export default copyPasswordReducer;
