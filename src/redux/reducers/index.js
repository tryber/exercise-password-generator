import { combineReducers } from 'redux';
import lengthPasswordReducer from './LengthPasswordReducer';
import passwordReducer from './passwordReducer';

const rootReducer = combineReducers({
  lengthPasswordReducer,
  passwordReducer,
});

export default rootReducer;
