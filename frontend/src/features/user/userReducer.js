import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userthunk";


const initialState = {
 user:{name:"",
    email:"",
    userName : "",
    password:null,
    photo :''

},
 error : null,
 loading  : false
}
const userReducer = createSlice({
    name : "users",
    initialState,
    reducers:{
       clearuser(state){
           state.error = null,
          state.user = {}
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
    }
})

export const {clearuser} = userReducer.actions;

export default userReducer.reducer;