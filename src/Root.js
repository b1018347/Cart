import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxAsync from 'middlewares/reduxAsync';
import cartReducer from 'reducers/cart';
import Cart from 'components/Cart';

export default ({ initialState = []}) => {
    const store = createStore(cartReducer, initialState, applyMiddleware(reduxAsync));

    return (
        <Provider store={store}>
            <h1>My Recruitment Cart</h1>
            <Cart/>
        </Provider>
    );
}