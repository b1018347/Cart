import axios from 'axios';
import { FETCH_CART_ITEMS, DELETE_CART_ITEM } from 'actions/types';

export function fetchCartItems() {
    const response = axios.get('http://jsonplaceholder.typicode.com/users/');
    return {
        type: FETCH_CART_ITEMS,
        payload: response
    };
}

export function deleteCartItem(id) {
    return {
        type: DELETE_CART_ITEM,
        payload: id
    };
}