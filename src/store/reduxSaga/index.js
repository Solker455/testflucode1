import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { loginRerucer, usersReducer } from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    login: loginRerucer,
    users: usersReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga) 