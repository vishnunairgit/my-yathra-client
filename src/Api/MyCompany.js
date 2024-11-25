import AxiosInstance from "../Config/AxiosInstance";


export const GetMycompany = async (companyId) => {
    try {
        const response = await AxiosInstance.get('/GetMycompany',
            {
                headers: {
                    'companyId': companyId
                }
            });
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};


export const UpdateCompany = async (companyId, formData) => {
    try {
        const response = await AxiosInstance.put(`/UpdateCompany/${companyId}`, formData, {
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

export const UpdateCompanyPassword = async (companyId, userData) => {
    try {
        const response = await AxiosInstance.put(`/UpdateCompanyPassword/${companyId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};