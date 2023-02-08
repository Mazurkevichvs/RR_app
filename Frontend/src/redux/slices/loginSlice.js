import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginValue: null,
    passwordValue: null,
    isLogged: false,
    token: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setLogin: (state, action) => {
        state.loginValue = action.payload.loginInput
        state.passwordValue = action.payload.passwordInput
        state.token = action.payload.token
      },
      logOut: (state) => {
        state.loginValue = null
        state.passwordValue = null
        state.isLogged = false
        state.token = null
      },
      setIsLogged: (state) => {
        state.isLogged = true
      }
    },
  })
  
  export const { setLogin, setPassword, logOut, setIsLogged } = loginSlice.actions
  
  export default loginSlice.reducer