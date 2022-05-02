import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 4,
};

export const lengthSlice = createSlice({
  name: 'length',
  initialState,
  reducers: {
    changeValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { changeValue } = lengthSlice.actions;

export default lengthSlice.reducer;
