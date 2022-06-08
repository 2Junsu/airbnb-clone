import { createSlice } from "@reduxjs/toolkit";

const signupReducer = createSlice({
    name: "signupReducer",
    initialState: {
        isEmailValid: false,
        email: "",
        userInfo: {},
        isSignupNoticeOpen: false,
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
        handleSignupNotice: (state, action) => ({
            ...state,
            isSignupNoticeOpen: action.payload,
        }),
    },
});

export const {
    handleEmailValid,
    updateEmail,
    saveUserInfo,
    handleSignupNotice,
} = signupReducer.actions;
export default signupReducer;
