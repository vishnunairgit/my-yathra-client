import AxiosInstance from "../Config/AxiosInstance";


export const getAllNotification = async () => {

    try {
        const response = await AxiosInstance.get('/getAllNotification');
        return response.data;
    } catch (error) {
        console.error("Error fetching job:", error);
        throw error;
    }
}