import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../page/login";
import { Register } from "../page/register";
import { Header } from "../page/header";
import { ReactForm } from "../page/reactForm";

export function PublicRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/testform" element={<ReactForm />} />
            </Routes>
        </div>)
}
