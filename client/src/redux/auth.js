import {createSlice} from '@reduxjs/toolkit'



export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    auth: false
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.auth = true
    },
    logout: (state) => {
      state.auth = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions

export default authSlice.reducer