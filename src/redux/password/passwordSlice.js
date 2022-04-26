import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
  settings: {
    IncludeNumbers: false,
    IncludeLowercase: false,
    IncludeUppercase: false,
    IncludeSymbols: false,
  },
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    savePassword: (state, action) => {
      state.password = action.payload;
    },
    handleSettings: (state, action) => {
      const { payload: { settingName, settingOption } } = action;
      state.settings[settingName] = settingOption;
    },
  },
});

export const { savePassword, handleSettings } = passwordSlice.actions;

export default passwordSlice.reducer;
