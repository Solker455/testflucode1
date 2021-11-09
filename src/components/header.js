import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Header() {
    const token = useSelector(state => state.tokenReducer.token)

    if (!token) {


        return (
            <div className="menu-block">
                <div className="menu">
                    <Link className="link" to="/">Главная</Link><br />
                    <Link className="link" to="/login">Войти</Link><br />
                    <Link className="link" to="/register">Регистрация</Link><br />
                </div>
            </div>
        )
    } else {
        return (
            <div className="menu-block">
                <div className="menu">
                    <Link className="link" to="/">Главная</Link><br />
                    <Link className="link" to="/listusers">Список пользователей</Link><br />
                </div>
            </div>
        )
    }
}