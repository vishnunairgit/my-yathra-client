import AxiosInstance from "../Config/AxiosInstance";


export const GetMycompany = async (userId) => {
    try {
        const response = await AxiosInstance.get('/GetMycompany',
            {
                headers: {
                    'UserId': userId
                }
            });
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};


export const UpdateCompany = async (userId, formData) => {
    try {
        const response = await AxiosInstance.put(`/UpdateCompany/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        return response.data;  // Return the data if you need it in the frontend
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;  // Rethrow for frontend error handling
    }
};


// export const UpdateCompany = async (userId, formData) => {
//     try {
//         const response = await AxiosInstance.put(`/UpdateCompany/${userId}`, formData,
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
        
//         return response.data;
//     } catch (error) {
//         console.error("Error updating user:", error);
//         throw error;
//     }
// };


export const UpdateCompanyPassword = async (userId, userData) => {
    try {
        const response = await AxiosInstance.put(`/UpdateCompanyPassword/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};