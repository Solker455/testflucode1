import React from "react";
import { Link } from "react-router-dom";

export function PublicLink() {
    return (
        <div className='menu-block'>
            <div className="menu">
                <Link className="link" to="/">Главная</Link>
                <Link className="link" to="/login">Войти</Link>
                <Link className="link" to="/register">Регистрация</Link>
                <Link className="link" to="/testform">Тестовая форма</Link>
            </div>
        </div>
    )
}
