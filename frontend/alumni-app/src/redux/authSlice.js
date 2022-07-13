import { createSlice } from "@reduxjs/toolkit";

//add reducer for logins and logout states
initialState = {
    email:"",
    password:""
}

export const authSlice=createSlice({
    name:'login',
    initialState,
    reducer:{
        
    }
})