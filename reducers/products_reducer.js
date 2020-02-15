export default function (state = {}, action) {

    switch (action.type) {

        case "SEARCH_PRODUCT":
            return { ...state, productData: action.payload }

        case "GET_PRODUCTS":
            // console.log(action.payload)
            return { ...state, productData: action.payload }
            break;
        default:
            return state;
    }
}