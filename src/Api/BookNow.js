import AxiosInstance from "../Config/AxiosInstance";

export const BookNow = async () => {
    try {
        const response = await AxiosInstance.post('/BookNow',  {
            headers: {
                'Content-Type': 'application/json', // Specify the payload is JSON
            }, 
        });
        return response.data;
    } catch (error) {
        console.error("Error while adding the trip:", error);
        throw error;
    }
};

