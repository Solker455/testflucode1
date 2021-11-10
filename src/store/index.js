import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tokenSlice from './slice'

const rootReducer = combineReducers({
    tokenSlice,
  })

export const store = configureStore ({
  reducer: rootReducer,
})