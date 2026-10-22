import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, loginUser, registerUser } from "./userthunk";

const initialState = {
 user:{},
 error : null,
 loading  : false,
 isAuthenticate : false,
 isAuthChecked : false  
}
const userReducer = createSlice({
    name : "users",
    initialState,
    reducers:{
       clearuser(state){
           state.error = null,
          state.user = {}
          state.user = null
       }
    },

    extraReducers : (builder) =>{
        builder
        .addCase(registerUser.pending, (state) =>{
            state.loading  = true
            state.error = null
        })

        .addCase(registerUser.fulfilled, (state, action) =>{
            state.user = action.payload;
            state.loading = false
            state.error = null
        })

        .addCase(registerUser.rejected, (state, action) =>{
            state.loading = false
            state.error = action.payload || action.error.message || "Could not register user"
        })

        .addCase(loginUser.pending,(state)=>{
            state.loading = true
            state.error = ""
        })

        .addCase(loginUser.fulfilled,(state, action)=>{
            // console.log("action", action)
            state.error = null
            state.loading = false
         
        })

        .addCase(loginUser.rejected,(state, action)=>{
            console.log("action", action)
            state.loading = false
            state.error = action.payload.message   || "login failed"
            
        })

        .addCase(fetchProfile.pending,(state) =>{
            state.isAuthenticate = false;
            state.error =null
        })

        .addCase(fetchProfile.fulfilled,(state, action) =>{
            state.isAuthenticate = true;
            state.isAuthChecked  = true;
            state.user = action.payload.data
        })
         .addCase(fetchProfile.rejected,(state) =>{
            state.isAuthenticate = false;
            state.isAuthChecked  = true;
            state.user = null
        })
    }

    
})

export const {clearuser} = userReducer.actions;

export default userReducer.reducer;