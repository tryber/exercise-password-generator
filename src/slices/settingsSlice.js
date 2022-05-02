import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  upperCase: true,
  lowerCase: true,
  numbers: false,
  symbols: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleUpperCase: (state) => {
      state.upperCase = !state.upperCase;
    },
    toggleLowerCase: (state) => {
      state.lowerCase = !state.lowerCase;
    },
    toggleNumbers: (state) => {
      state.numbers = !state.numbers;
    },
    toggleSymbols: (state) => {
      state.symbols = !state.symbols;
    },
  },
});

export const {
  toggleUpperCase, toggleLowerCase, toggleNumbers, toggleSymbols,
} = settingsSlice.actions;

export default settingsSlice.reducer;
