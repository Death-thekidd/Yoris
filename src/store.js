import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import reducer from "./reducer";

// const middleware = [thunk];
// const store = createStore(authReducer, applyMiddleware(...middleware));

const store = configureStore({ reducer });
export default store;
