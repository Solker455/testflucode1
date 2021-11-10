import React from "react";
import { Link } from "react-router-dom";

export function PrivateLink(obj) {
    return (
        <div className='menu-block'>
            <div className="menu">
                <Link className="link" to="/">Главная</Link>
                <Link className="link" to="/listusers">Список пользователей</Link>
                <button onClick={obj.logout} className='linkButton'>Выход</button>
            </div>
        </div>
    )
}
