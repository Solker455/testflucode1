import {createStore, combineReducers} from "redux"
import { tokenReducer } from "./tokenReducer";

const rootReducer = combineReducers({
    tokenReducer,
  })

export const store = createStore(rootReducer);