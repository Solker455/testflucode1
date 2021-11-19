const initialLogin = {
    auth: false,
    token: null,
    loading: false,
    message: null
}
const initialUsers = {
    loading: false,
    data: []
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
                message: 'Ошибка авторизации',
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}

export const usersReducer = function (state = initialUsers, action) {
    switch (action.type) {
        case 'LOAD_USERS': {
            return {
                ...state,
                data: action.users
            }
        }
        case 'LOADING_USERS': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        case 'LOGOUT': {
            return {
                data: []
            }
        }
        default: return state;
    }
}