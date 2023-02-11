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
        state.isLogged = true
      },
      logOut: (state) => {
        state.loginValue = null
        state.passwordValue = null
        state.isLogged = false
        state.token = null
      },
      setIsLogged: (state, action) => {
        state.isLogged = true
        state.loginValue = action.payload.login
        state.token = action.payload.token
      }
    },
  })
  
  export const { setLogin, logOut, setIsLogged } = loginSlice.actions
  
  export default loginSlice.reducer