import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ListUsers } from "../page/listUsers";
import { Header } from "../page/header";

export function Private() {
    return (<Router>
        <Header />
        <Route path="/listusers"><ListUsers /></Route>
        <Redirect to="/listusers" />
    </Router>)
}
