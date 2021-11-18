import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import getUsersSlice from './getUsersSlice'

const rootReducer = combineReducers({
  auth:authSlice,
  getusers: getUsersSlice
})

export const store = configureStore({
  reducer: rootReducer,
})