import { createSlice } from "@reduxjs/toolkit";
import { asyncThunkUsers } from "./asyncThunk";

const getUsersSlice = createSlice({
    name: "getUsersSlice",
    initialState: {
        loading: false,
        data: []
    },
    extraReducers: {
        [asyncThunkUsers.panding]: (state) => {
            state.loading = false
        },
        [asyncThunkUsers.fulfilled]: (state, action) => {
            state.loading = true
            state.data = action.payload
        }
    }
})

export default getUsersSlice.reducer