import { FormattedMessage } from "react-intl"
const initialLogin = {
    auth: false,
    token: null,
    loading: false,
    message: null
}

export const loginRerucer = function (state = initialLogin, action) {
    switch (action.type) {
        case 'LOAD_TOKIN': {
            return {
                ...state,
                auth: true,
                token: action.token,
                message: null
            }
        }
        case 'LOADING_LOGIN': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                auth: false,
                token: null
            }
        }
        case 'ERROR_LOGIN': {
            return {
                ...state,
                message: <FormattedMessage id='ERROR_LOGIN' />,
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}