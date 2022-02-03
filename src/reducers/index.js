import { combineReducers } from 'redux';
import changingInputs from './changingInputs';
import login from './login';
import lengthInput from './lengthInput';

const rootReducer = combineReducers({ changingInputs, login, lengthInput });

export default rootReducer;
