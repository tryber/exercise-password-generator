import { configureStore } from '@reduxjs/toolkit';
import setConfigReducer from '../features/setPassword';

export default configureStore({
  reducer: {
    userConfig: setConfigReducer,
  },
});
