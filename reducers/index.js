import { combineReducers } from "redux";
import products from "./products_reducer";
import cart from "./cart_reducer";
import user from "./user_reducer";
const rootReducer = combineReducers({
    products,
    cart,
    user

})

export default rootReducer; 