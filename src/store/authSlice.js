import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userStatus:false,
    userData:null
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userStatus = true;
            state.userData = action.payload;
        },
        logout:(state,action)=>{
            state.userStatus = false;
            state.userData = null;
        }
    }
})

export const {login,logout} = authSlice.actions;

export const authReducer = authSlice.reducer;