import { combineReducers } from 'redux';
import lengthPasswordReducer from './LengthPasswordReducer';
import passwordReducer from './passwordReducer';
import copyPasswordReducer from './CopyPasswordReducer';

const rootReducer = combineReducers({
  lengthPasswordReducer,
  passwordReducer,
  copyPasswordReducer,
});

export default rootReducer;
