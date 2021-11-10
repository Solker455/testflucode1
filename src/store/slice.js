import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        auth: false, 
        token: null
    },
    reducers: {
        addActionCreator_token(state, {payload}) {
            state.token = payload
            state.auth = true
        },
        logoutActionCreator_token(state) {
            state.token = null
            state.auth = false
        }
    }
})

export default tokenSlice.reducer
export const {addActionCreator_token, logoutActionCreator_token} = tokenSlice.actions