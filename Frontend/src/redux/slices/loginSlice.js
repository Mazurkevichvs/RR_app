import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginValue: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setLogin: (state, action) => {
        state.loginValue = action.payload
      },
    },
  })
  
  export const { setLogin } = loginSlice.actions
  
  export default loginSlice.reducer