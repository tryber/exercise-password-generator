import { combineReducers } from 'redux';
import changingWord from './changingInputs';
import login from './login';
import lengthInput from './lengthInput';

const rootReducer = combineReducers({ changingWord, login, lengthInput });

export default rootReducer;
