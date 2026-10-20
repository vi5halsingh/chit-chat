import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/user/userReducer.js"
const store = configureStore({
    reducer:{
        users : userReducer
    }
})

export default store;