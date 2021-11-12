import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PublicLink } from "../link/publicLink";
import { PrivateLink } from "../link/privateLink";
import { logoutActionCreator_token } from "../../store/authSlice";


export function Header() {
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch();
    const logout = async () => {
        await dispatch(logoutActionCreator_token());
    }
    return (auth) ? <PrivateLink logout={logout} /> : <PublicLink />
}