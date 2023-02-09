import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    recipe: null,
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
      setRecipe: (state, action) => {
        state.recipe = action.payload
      },
    },
  })
  
  export const { setRecipe } = recipeSlice.actions
  
  export default recipeSlice.reducer