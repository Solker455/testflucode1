import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutActionCreator_token } from "../../store/actions";

export function Header() {
    const token = useSelector(state => state.tokenReducer.token)
    const dispatch = useDispatch();
    const logout = async () => {
        await dispatch(logoutActionCreator_token());
    }
    if (!token) {


        return (
            <div className="menu-block">
                <div className="menu">
                    <Link className="link" to="/">Главная</Link>
                    <Link className="link" to="/login">Войти</Link>
                    <Link className="link" to="/register">Регистрация</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="menu-block">
                <div className="menu">
                    <Link className="link" to="/">Главная</Link>
                    <Link className="link" to="/listusers">Список пользователей</Link>
                    <button onClick={logout} className='linkButton'>Выход</button>
                </div>
            </div>
        )
    }
}