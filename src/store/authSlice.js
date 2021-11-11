import { createSlice } from "@reduxjs/toolkit";
import { asyncThunkLogin, asyncThunkRegister } from "./asyncThunk";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        auth: false,
        token: null,
        message: null
    },
    reducers: {
        logoutActionCreator_token(state) {
            state.token = null
            state.auth = false
            state.message = null
        }
    },
    extraReducers: {
        [asyncThunkLogin.panding]: (state) => {
            state.message = null
            state.token = null
            state.auth = false
        },
        [asyncThunkLogin.fulfilled]: (state, action) => {
            state.token = action.payload
            state.auth = true
        },
        [asyncThunkLogin.rejected]: (state) => {
            state.message = 'Ошибка авторизации'
        },
        [asyncThunkRegister.panding]: (state) => {
            state.message = null
            state.token = null
            state.auth = false
        },
        [asyncThunkRegister.fulfilled]: (state, action) => {
            state.token = action.payload
            state.auth = true
        },
        [asyncThunkRegister.rejected]: (state) => {
            state.message = 'Ошибка регистрации'
        }
    }
})


export default authSlice.reducer
export const { logoutActionCreator_token } = authSlice.actions