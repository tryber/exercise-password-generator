import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    savePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { savePassword } = passwordSlice.actions;

export default passwordSlice.reducer;
