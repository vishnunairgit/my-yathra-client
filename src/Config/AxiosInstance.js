import axios from "axios";
import { BASE_URL } from "../Constants/BaseUrl";

const AxiosInstance = axios.create({
    baseURL: BASE_URL
});
AxiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
},
    function (error) {
        return Promise.reject(error);
    })
export default AxiosInstance;