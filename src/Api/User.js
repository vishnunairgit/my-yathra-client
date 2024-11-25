import AxiosInstance from "../Config/AxiosInstance";


export const Getuser = async (companyId) => {
    try {
        const response = await AxiosInstance.get('/Getuser',
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

