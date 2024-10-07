import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";

const store = configureStore({
    reducer:{ 
        authSlice:authReducer,
    }
})

export default store;