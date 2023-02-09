import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';
import categorySlice from './slices/categorySlice';
import recipeSlice from './slices/recipeSlice';


export const store = configureStore({
  reducer: {
    loginSlice,
    categorySlice,
    recipeSlice
  },
})