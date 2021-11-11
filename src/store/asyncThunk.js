import { createAsyncThunk } from "@reduxjs/toolkit";
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