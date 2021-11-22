import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

export function PrivateLink(obj) {
    return (
        <div className='menu-block'>
            <div className="menu">
                <Link className="link" to="/"><FormattedMessage id='HOME' /></Link>
                <Link className="link" to="/listusers"><FormattedMessage id='LIST_USERS' /></Link>
                <button onClick={obj.logout} className='linkButton'><FormattedMessage id='LOGOUT' /></button>
            </div>
        </div>
    )
}
