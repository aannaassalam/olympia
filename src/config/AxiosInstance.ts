import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
})

axiosInstance.interceptors.request.use((config) => {
    if(localStorage.getItem("token")){
        config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`
    }
    return config;
})