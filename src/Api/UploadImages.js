import AxiosInstance from "../Config/AxiosInstance";

export const AddTripImages = async (addImages) => {
    try {
        const response = await AxiosInstance.post('/AddTripImages', addImages);
        return response.data;
    } catch (error) {
        console.error("Error while adding the trip:", error);
        throw error;
    }
};