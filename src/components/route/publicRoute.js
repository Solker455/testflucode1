import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../page/login";
import { Register } from "../page/register";
import { Header } from "../component/header";
import { Home } from "../page/home";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>)
}
