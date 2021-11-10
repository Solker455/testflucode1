import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ListUsers } from "../page/listUsers";

export function Private() {
    return (<Router>
        <Route path="/listusers"><ListUsers /></Route>
        <Redirect to='/listusers' />
    </Router>)
}
