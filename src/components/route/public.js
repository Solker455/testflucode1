import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login } from "../page/login";
import { Register } from "../page/register";
import { Header } from "../page/header";

export function Public() {
    return (<Router>
        <Header />
        <Route path="/register" ><Register /></Route>
        <Route path="/login" exact><Login /></Route>
        <Redirect to='/login' />
    </Router>)
}
