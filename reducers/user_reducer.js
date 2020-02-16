export default function (state = {}, action) {

    switch (action.type) {

        case "LOGOUT_USER":
            return { ...state, userData: action.payload }

        case "GET_USER":
            return { ...state, userData: action.payload }

        case "LOGIN_USER":
            return { ...state, userData: action.payload }
        default:
            return state;
    }
}