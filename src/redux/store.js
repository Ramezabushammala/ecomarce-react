import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootreduser from "./redusers/rootreduser"; 
import {composeWithDevTools} from "@redux-devtools/extension"

const initilState ={}
const Middleware =[thunk];
const store = createStore(rootreduser ,initilState,composeWithDevTools(
    applyMiddleware(...Middleware)
));

export default store;