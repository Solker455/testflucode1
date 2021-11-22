import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { loginRerucer } from "./reducers/authReducer";
import { usersReducer } from "./reducers/usersReducer";
import rootSaga from "./watchers.js";
import { langReducer } from "./reducers/langReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    login: loginRerucer,
    users: usersReducer,
    lang: langReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)