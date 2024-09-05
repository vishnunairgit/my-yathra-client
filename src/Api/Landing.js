
import AxiosInstance from "../Config/AxiosInstance";



export const register = async (userData) => {
    try {
        const response = await AxiosInstance.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (loginForm) => {
    try {
        const response = await AxiosInstance.post('/login', loginForm);
        return response.data;
    } catch (error) {
        throw error;
    }
};
