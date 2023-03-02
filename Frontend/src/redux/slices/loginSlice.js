import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginValue: null,
    passwordValue: null,
    isLogged: false,
    token: null,
    isVisible: false
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
      },
      setPasswordVisibility: (state) => {
        state.isVisible = !state.isVisible
      }
    },
  })
  
  export const { setLogin, logOut, setIsLogged, setPasswordVisibility } = loginSlice.actions
  
  export default loginSlice.reducer