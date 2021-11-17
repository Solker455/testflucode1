import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, apiLogin, apiRegister } from "../api/api";

export const asyncThunkUsers = createAsyncThunk(
    'getUsersSlice/asyncThunkUsers',
    async function (pages) {
        const responce = await getUsers(pages.perPage, pages.page)
        return responce.data;

    }
)
export const asyncThunkLogin = createAsyncThunk(
    'authSlice/asyncThunkLogin',
    async function (input) {
        const responce = await apiLogin(input.email, input.password)
        return responce.data;

    }
)
export const asyncThunkRegister = createAsyncThunk(
    'authSlice/asyncThunkRegister',
    async function (input) {
        const responce = await apiRegister(input.email, input.password)
        return responce.data;

    }
)