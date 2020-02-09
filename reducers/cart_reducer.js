export default function (state = {}, action) {

    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cartClear: action.payload }
        case "STORE_ITEM_TO_CART":
            return { ...state, cartInfo: action.payload }
            break;
        case "GET_CART":
            return { ...state, cartData: action.payload }
            break;
        case "ADD_ITEM_TO_CART":
            return { ...state, cartData: action.payload }
            break;
        default:
            return state;
    }
} 