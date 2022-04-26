import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  length: 4,
  conditions: {
    numbers: false,
    symbols: false,
    lowercase: false,
    uppercase: false,
  },
  password: 'PLEASE, SET YOUR PASSWORD SETTINGS',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    changeLength: (state, action) => {
      state.length = action.payload;
    },
    changeConditions: (state, action) => {
      state.conditions = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeLength, changeConditions, changePassword } = passwordSlice.actions;
export default passwordSlice.reducer;
