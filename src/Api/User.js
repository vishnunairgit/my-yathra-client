import AxiosInstance from "../Config/AxiosInstance";

export const Getuser = async (userId) => {
    try {
        const response = await AxiosInstance.get('/Getuser',
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


// export const updateUser = async (userId, userData) => {
//     try {
//         const response = await AxiosInstance.put(`/updateUser/${userId}`, userData);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating user:", error);
//         throw error;
//     }
// };

export const updateUser = async (userId, formData) => {
    try {
        const response = await AxiosInstance.put(`/updateUser/${userId}`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};


export const updateUserpassword = async (userId, userData) => {
    try {
        const response = await AxiosInstance.put(`/updateUserpassword/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};
