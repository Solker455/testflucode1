const initialUsers = {
    language: 'RUSSIAN'
}

export const langReducer = function (state = initialUsers, action) {
    switch (action.type) {
        case 'LOAD_LANGUAGE': {
            return {
                ...state,
                language: action.language
            }
        }
        default: return state;
    }
}