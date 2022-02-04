import { combineReducers } from 'redux';
import checkboxReducer from './CheckboxReducer';
import lengthPasswordReducer from './LengthPasswordReducer';
import passwordReducer from './passwordReducer';

const rootReducer = combineReducers({
  checkboxReducer,
  lengthPasswordReducer,
  passwordReducer,
});

export default rootReducer;
