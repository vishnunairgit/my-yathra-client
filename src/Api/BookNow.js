import AxiosInstance from "../Config/AxiosInstance";

// export const BookNow = async (booknow) => {
//     try {
//         const response = await AxiosInstance.post('/BookNow', booknow, {
//             headers: {
//                 'Content-Type': 'application/json', // Specify the payload is JSON
//             }, 
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error while adding the trip:", error);
//         throw error;
//     }
// };

export const BookNow = async (booknow) => {
    try {
        const response = await AxiosInstance.post('/BookNow', booknow);
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};