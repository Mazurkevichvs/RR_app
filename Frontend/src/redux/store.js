import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import loginReducer from './slices/loginSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginReducer,
  },
})