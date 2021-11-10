import { createReducer } from "@reduxjs/toolkit";
import { logoutActionCreator_token, addActionCreator_token } from "./actions";
const defaultToken = {
    auth: null
};

export default createReducer (defaultToken, {
    [addActionCreator_token]: function(state) {
        state.auth = true
    },
    [logoutActionCreator_token]: function(state) {
        state.auth = false
    }
})