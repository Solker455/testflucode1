import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ListUsers } from "../page/listUsers";
import { Header } from "../component/header";
import { Home } from "../page/home";

export function PrivateRoute() {
    return (<div>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="/listusers" element={<ListUsers />} />
        </Routes>
    </div>)
}
