import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSlice from './slice'

const rootReducer = combineReducers({
  rootSlice,
  })

export const store = configureStore ({
  reducer: rootReducer,
})