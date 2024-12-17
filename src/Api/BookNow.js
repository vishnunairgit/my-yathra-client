import AxiosInstance from "../Config/AxiosInstance";


export const BookNow = async (booknow) => {
    try {
        const response = await AxiosInstance.post('/BookNow', booknow);
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};