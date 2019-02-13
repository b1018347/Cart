import { FETCH_CART_ITEMS, DELETE_CART_ITEM } from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_CART_ITEMS:
            return [...state,...action.payload];
        case DELETE_CART_ITEM:
            const newCartItems = state.filter(item => item.id !== action.payload);
            return newCartItems;
        default:
            return state; 
    }
}