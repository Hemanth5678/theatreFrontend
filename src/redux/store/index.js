import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {}

const middleware = [thunk]

const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store;
