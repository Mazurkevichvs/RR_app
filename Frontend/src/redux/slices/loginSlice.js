import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginValue: null,
    passwordValue: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setLogin: (state, action) => {
        state.loginValue = action.payload
      },
      setPassword: (state, action) => {
        state.passwordValue = action.payload
      },
    },
  })
  
  export const { setLogin, setPassword } = loginSlice.actions
  
  export default loginSlice.reducer