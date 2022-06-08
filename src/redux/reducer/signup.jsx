import { createSlice } from "@reduxjs/toolkit";

const signupReducer = createSlice({
    name: "signupReducer",
    initialState: {
        isEmailValid: false,
        email: "",
    },
    reducers: {
        handleEmailValid: (state, action) => ({
            ...state,
            isEmailValid: action.payload,
        }),
        updateEmail: (state, action) => ({ ...state, email: action.payload }),
    },
});

export const { handleEmailValid, updateEmail } = signupReducer.actions;
export default signupReducer;
