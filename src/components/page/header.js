import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutActionCreator_token } from "../../store/actions";
import { PublicLink } from "../link/publicLink";
import { PrivateLink } from "../link/privateLink";

export function Header() {
    const auth = useSelector(state => state.tokenReducer.auth)
    const dispatch = useDispatch();
    const logout = async () => {
        await dispatch(logoutActionCreator_token());
    }
    return (auth) ? <PrivateLink logout={logout}/> : <PublicLink />
}