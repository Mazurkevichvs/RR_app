import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';
import categorySlice from './slices/categorySlice';


export const store = configureStore({
  reducer: {
    loginSlice,
    categorySlice
  },
})