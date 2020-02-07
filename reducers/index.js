import { combineReducers } from "redux";
import products from "./products_reducer";
import cart from "./cart_reducer";
const rootReducer = combineReducers({
    products,
    cart

})

export default rootReducer; 