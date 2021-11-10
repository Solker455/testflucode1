const defaultToken = {
    token: undefined
};

export const tokenReducer = (state = defaultToken, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return { ...state, token: action.token }
        case "DELETE_TOKEN":
            return {}
        default:
            return state
    }
}