import data from "../data";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import _ from "lodash";

export function getProducts() {

    const url = "https://randomuser.me/api/?results=100";

    const request = axios.get(url).then(response => response.data);

    return {
        type: "GET_PRODUCTS",
        payload: data
    }



}



export function addToCart(item) {

    // AsyncStorage.setItem("cart", "some iitem");

    let cart = AsyncStorage.getItem("cart").then(response => {

        return response;
    })



    return {
        type: "ADD_ITEM_TO_CART",
        payload: cart
    }

}


export function storeItem(cart = [], item) {

    if (item) {

        cart.push(item);

    }

    //convert cart to string
    let strCart = JSON.stringify(cart)


    AsyncStorage.setItem('cart', strCart);
    return {
        type: "STORE_ITEM_TO_CART",
        payload: {
            success: true
        }
    }


}

export function getCart() {

    let cart = AsyncStorage.getItem('cart').then(response => response);

    //when there is no item in cart
    if (!cart) {

        cart = [];
    }
    return {

        type: "GET_CART",
        payload: cart
    }


}

export function clearCart() {

    AsyncStorage.removeItem('cart');

    getCart();

    return {

        type: "CLEAR_CART",
        payload: {
            success: true,

        }
    }

}

export function saveCart(cart) {

    //type of cart is array

    //convert cart to string
    let strCart = JSON.stringify(cart);

    //save cart
    AsyncStorage.setItem("cart", strCart);

    getCart()

    //return progress info
    return {

        type: "SAVE_CART",
        payload: {
            success: true
        }
    }
}


export function searchProduct(data, search) {

    let items = data.filter(item => {

        return (item.name.toLowerCase().includes(search.toLowerCase()))
    });

    return {

        type: 'SEARCH_PRODUCT',
        payload: items
    }
}

export function loginUser(userData) {

    // console.log(userData);

    AsyncStorage.setItem('user', userData);

    return {
        type: "LOGIN_USER",
        payload: {
            success: true
        }
    }
}

export function getUser() {

    let request = AsyncStorage.getItem('user').then(response => response);
    return {
        type: "GET_USER",
        payload: request
    }
}

export function logoutUser() {

    AsyncStorage.removeItem("user");

    return {

        type: "LOGOUT_USER",
        payload: null
    }
}