import { createSlice } from '@reduxjs/toolkit';

export const setConfigSlice = createSlice({
  name: 'userConfig',
  initialState: {
    password: undefined,
  },

  reducers: {
    setPassword: (state, action) => {
      localStorage.setItem('pass', JSON.stringify(action.payload));
      state.password = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPassword } = setConfigSlice.actions;

export default setConfigSlice.reducer;
