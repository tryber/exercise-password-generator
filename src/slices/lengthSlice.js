import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 4,
};

export const lengthSlice = createSlice({
  name: 'length',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = lengthSlice.actions;

export default lengthSlice.reducer;
