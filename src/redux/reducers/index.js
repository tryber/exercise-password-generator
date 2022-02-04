import { combineReducers } from 'redux';
import checkboxReducer from './CheckboxReducer';
import lengthPassowordReducer from './LengthPasswordReducer';

const rootReducer = combineReducers({
  checkboxReducer,
  lengthPassowordReducer,
});

export default rootReducer;
