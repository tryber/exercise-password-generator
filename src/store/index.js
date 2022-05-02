import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from '../slices/lengthSlice';
import settingsReducer from '../slices/settingsSlice';
import passwordReducer from '../slices/passwordSlice';

const store = configureStore({
  reducer: {
    length: lengthReducer,
    settings: settingsReducer,
    password: passwordReducer,
  },
});

export default store;
