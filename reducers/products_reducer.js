export default function (state = {}, action) {

    switch (action.type) {

        case "GET_PRODUCTS":
            // console.log(action.payload)
            return { ...state, productData: action.payload }
            break;
        default:
            return state;
    }
}