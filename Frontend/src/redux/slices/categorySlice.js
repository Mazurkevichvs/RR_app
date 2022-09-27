import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categoryList: [],
    activeItem: 0,
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      setCategory: (state, action) => {
        state.categoryList = action.payload
      },
      setActiveItem: (state, action) => {
        state.activeItem = action.payload
      },
    },
  })
  
  export const { setCategory,setActiveItem } = categorySlice.actions
  
  export default categorySlice.reducer