import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;

export default passwordSlice.reducer;
