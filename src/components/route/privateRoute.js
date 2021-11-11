import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ListUsers } from "../page/listUsers";
import { Header } from "../page/header";

export function PrivateRoute() {
    return (<div>
        <Header />
        <Routes>
            <Route path="/listusers" element={<ListUsers />} />
            <Route path='*' element={<ListUsers />} />
        </Routes>
    </div>)
}
