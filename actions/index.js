import data from "../data";
import axios from "axios";

export function getProducts() {

    const url = "https://randomuser.me/api/?results=100";

    const request = axios.get(url).then(response => response.data);

    return {
        type: "GET_PRODUCTS",
        payload: data
    }



}