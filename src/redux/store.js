import {productsRedusers} from "./reducers/productRedusers";
import thunk from "redux-thunk";
import {applyMiddleware, compose} from "redux";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


const initialState={};
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ||compose;

export const store=createStore(combineReducers({
    products:productsRedusers,
}),initialState,
    compose(applyMiddleware(thunk))
);
export default store;