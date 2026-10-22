import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api.js"

export const registerUser = createAsyncThunk(
    'register/user',
    async(payload,{rejectWithValue}) =>{
        try {
        console.log(payload)
    const response = await api.post('/register',payload)
    // console.log(response)
    return response.data
} catch (error) {
    console.log(error)
    return rejectWithValue( error.response?.data?.message ||  error.message ||"cann't register user")
        
}
}
)

export const loginUser = createAsyncThunk(
    'users/login',
    async (payload,{rejectWithValue}) =>{
        try {
            const response =await api.post('/login',payload)
            return response.data
            
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response?.data?.message || error.message || "Login faild")
        }
    }
)

export const fetchProfile = createAsyncThunk(
    'users/fetchProfile',
    async(_, {rejectWithValue}) =>{
        try {
            const response = await api.get("/profile",{
                withCredentials:true
            })
            // console.log("response",response);
            return response.data;
        } catch (error) {
           console.log(error) 
           return rejectWithValue(error.reponse.data.messsage || "Authenticate failed")
        }
    }
)