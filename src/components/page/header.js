import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PublicLink } from "../link/publicLink";
import { PrivateLink } from "../link/privateLink";


export function Header() {
    const auth = useSelector(state => state.login.auth)
    const dispatch = useDispatch();
    const logout = async () => {
        await dispatch({type: 'LOGOUT'});
    }
    return (auth) ? <PrivateLink logout={logout} /> : <PublicLink />
}