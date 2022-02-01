import { combineReducers } from 'redux';
import changingInputs from './changingInputs';
import password from './password';

const rootReducer = combineReducers({ changingInputs, password });

export default rootReducer;
