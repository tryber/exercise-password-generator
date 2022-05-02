import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from '../slices/lengthSlice';
import settingsReducer from '../slices/settingsSlice';

const store = configureStore({
  reducer: {
    length: lengthReducer,
    settings: settingsReducer,
  },
});

export default store;
