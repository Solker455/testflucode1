const defaultToken = {
    token: undefined
};
const DELETE_TOKEN = 'DELETE_TOKEN';
export const logoutActionCreator_token = (data) => ({ type: DELETE_TOKEN, data })

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