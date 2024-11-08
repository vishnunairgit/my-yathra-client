import AxiosInstance from "../Config/AxiosInstance";

export const AddTrip = async (addTrips) => {
    try {
        const response = await AxiosInstance.post('/AddTrip', addTrips);
        return response.data;
    } catch (error) {
        console.error("Error while adding the trip:", error);
        throw error;
    }
};


export const GetTrips = async () => {
    try {
        const response = await AxiosInstance.get('/GetTrips');
        return response.data;
    } catch (error) {
        console.error("Error while adding the trip:", error);
        throw error;
    }
};














