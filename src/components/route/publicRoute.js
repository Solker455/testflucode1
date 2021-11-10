import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login } from "../page/login";
import { Register } from "../page/register";
import { Header } from "../page/header";

export function PublicRoute() {
    return (<Router>
        <Header />
        <Route path="/register" ><Register /></Route>
        <Route path="/login" ><Login /></Route>
        <Redirect to='/login' />
    </Router>)
}
