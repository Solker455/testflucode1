const initialUsers = {
    loading: false,
    data: []
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