import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, apiLogin, apiRegister } from "../api/api";

export const asyncThunkUsers = createAsyncThunk(
    'asyncThunkUsers',
    async function (page) {
        const responce = await getUsers(page)
        return responce.data;

    }
)
export const asyncThunkLogin = createAsyncThunk(
    'asyncThunkLogin',
    async function (emailInput, passwordInput) {
        const responce = await apiLogin(emailInput, passwordInput)
        return responce.data;

    }
)
export const asyncThunkRegister = createAsyncThunk(
    'asyncThunkLogin',
    async function (emailInput, passwordInput) {
        const responce = await apiRegister(emailInput, passwordInput)
        return responce.data;

    }
)

const rootSlice = createSlice({
    name: "rootSlice",
    initialState: {
        auth: false,
        token: null,
        loading: false,
        data: [],
        message: null
    },
    reducers: {
        logoutActionCreator_token(state) {
            state.token = null
            state.auth = false
        }
    },
    extraReducers: {
        [asyncThunkUsers.panding]: (state) => {
            state.loading = false
        },
        [asyncThunkUsers.fulfilled]: (state, action) => {
            state.loading = true
            state.data = action.payload
        },
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

export default rootSlice.reducer
export const { addActionCreator_token, logoutActionCreator_token } = rootSlice.actions