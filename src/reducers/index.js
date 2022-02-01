import { combineReducers } from 'redux';
import changingInputs from './changingInputs';
import password from './password';
import lengthInput from './lengthInput';

const rootReducer = combineReducers({ changingInputs, password, lengthInput });

export default rootReducer;
