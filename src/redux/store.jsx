import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { signup } from "./reducer";

const rootReducer = combineReducers({ signup: signup.reducer });

const store = configureStore({ reducer: rootReducer });

export default store;
