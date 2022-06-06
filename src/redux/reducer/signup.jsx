import { createSlice } from "@reduxjs/toolkit";

const signupReducer = createSlice({
    name: "signupReducer",
    initialState: {
        isEmailValid: false,
    },
    reducers: {
        handleEmailValid: (state, action) => ({
            ...state,
            isEmailValid: action.payload,
        }),
    },
});

export const { handleEmailValid } = signupReducer.actions;
export default signupReducer;
