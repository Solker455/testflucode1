const initialLogin = {
    auth: false,
    token: null,
}
const initialUsers = {
    loading: false,
    data: []
}

export const loginRerucer =  function (state = initialLogin, action) {
    switch(action.type) {
        case 'LOAD_TOKIN': {
            return {
            auth: true,
            token: action.token
            }
        }
        case 'LOGOUT': {
            return {
            auth: false,
            token: null
            }
        }
        default: return state;
    }
}

export const usersReducer =  function (state = initialUsers, action) {
    switch(action.type) {
        case 'LOAD_USERS': {
            return {
            loading: true,
            data: action.users
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