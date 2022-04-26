import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from '../reducers/index';

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export default store;
