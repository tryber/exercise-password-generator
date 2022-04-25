import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    savePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { savePassword } = counterSlice.actions;

export default counterSlice.reducer;
