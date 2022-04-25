import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from '../slices/lengthSlice';

const store = configureStore({
  reducer: {
    length: lengthReducer,
  },
});

export default store;
