import axios from "axios"
const APP_URL = import.meta.env.APP_URL;

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
  
    headers:{
        // 'Content-Type':'application/json',
        'Accept':'application/json',
        
    },
    timeout: 10000,
    withCredentials:true
    

})

export default api;