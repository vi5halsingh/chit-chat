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