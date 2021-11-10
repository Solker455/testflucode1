import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
    tokenReducer,
  })

export const store = configureStore ({
  reducer: rootReducer,
})