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

export const GetSingleTrip = async (tripId) => {
    try {
        const response = await AxiosInstance.get(`/GetSingleTrip/${tripId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching single trip:", error);
        throw error; // Throwing the error allows the calling function to handle it.
    }
};

export const EditTrip = async (tripId, tripData) => {
    try {
        const response = await AxiosInstance.put(`/EditTrip/${tripId}`, tripData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure the request header is correct for FormData
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating trip:", error);
        throw error;
    }
};



// Delete Trip

export const DeleteTrip = async (tripId) => {
    try {
        const response = await AxiosInstance.delete(`/DeleteTrip/${tripId}`)
        return response.data
    } catch (error) {
        console.error("Error deleting job:", error);
        throw error;
    }
}











