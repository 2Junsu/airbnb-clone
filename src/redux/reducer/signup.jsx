import { createSlice } from "@reduxjs/toolkit";

const signupReducer = createSlice({
    name: "signupReducer",
    initialState: {
        isEmailValid: false,
        email: "",
        userInfo: {},
    },
    reducers: {
        handleEmailValid: (state, action) => ({
            ...state,
            isEmailValid: action.payload,
        }),
        updateEmail: (state, action) => ({ ...state, email: action.payload }),
        saveUserInfo: (state, action) => ({
            ...state,
            userInfo: action.payload,
        }),
    },
});

export const { handleEmailValid, updateEmail, saveUserInfo } =
    signupReducer.actions;
export default signupReducer;
