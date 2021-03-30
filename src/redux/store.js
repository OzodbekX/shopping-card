import {productsRedusers} from "./reducers/productRedusers";
import thunk from "redux-thunk";
import {applyMiddleware, compose} from "redux";
import {cartReducer} from "./reducers/cartReducers";
import {combineReducers} from "redux";
import {orderReducer} from "./reducers/orderReducer";

//const {combineReducers} = require("redux");
const {createStore} = require("redux");


const initialState={};
if(localStorage.getItem("cartItems")){
        initialState.cart={items:JSON.parse(localStorage.getItem("cartItems"))}
}

export const store=createStore(
    combineReducers({
            products:productsRedusers,
            cart:cartReducer,
            order:orderReducer,
}),initialState,
    compose(applyMiddleware(thunk))
);
