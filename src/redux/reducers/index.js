import { combineReducers } from 'redux';
import configReducer from './configReducer';

const rootReducer = combineReducers({ configReducer });

export default rootReducer;
