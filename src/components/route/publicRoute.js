import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../page/login";
import { Register } from "../page/register";
import { Header } from "../page/header";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path='*' element={<Login />} />
            </Routes>
        </div>)
}
