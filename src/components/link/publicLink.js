import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

export function PublicLink() {
    return (
        <div className='menu-block'>
            <div className="menu">
                <Link className="link" to="/"><FormattedMessage id='HOME' /></Link>
                <Link className="link" to="/login"><FormattedMessage id='LOGIN' /></Link>
                <Link className="link" to="/register"><FormattedMessage id='REGISTER' /></Link>
            </div>
        </div>
    )
}
