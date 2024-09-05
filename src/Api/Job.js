import AxiosInstance from "../Config/AxiosInstance";

// add job
export const Addjob = async (addJobs) => {
    try {
        const response = await AxiosInstance.post('/Addjob', addJobs);
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};

// Get jobs
export const getJobs = async (userId) => {
    try {
        const response = await AxiosInstance.get(`/getJobs`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
};


// Get all Jobs
export const getAllJob = async () => {

    try {
        const response = await AxiosInstance.get('/getAllJobs');
        return response.data;
    } catch (error) {
        console.error("Error fetching job:", error);
        throw error;
    }
}


// GetsingleJob
export const getSingleJob = async (jobId) => {
    try {
        const response = await AxiosInstance.get(`/getSingleJob/${jobId}`)
        return response.data
    } catch (error) {
        console.error("Error fetching single job:", error);
        throw error;
    }
}

// Edit Jobs
export const updateJob = async (jobId, jobData) => {
    try {
        const response = await AxiosInstance.put(`/EditJob/${jobId}`, jobData)
        return response.data
    } catch (error) {
        console.error("Error updating job:", error);
        throw error;
    }
}

// Delete the Job
export const deleteJob = async (jobId) => {
    try {
        const response = await AxiosInstance.delete(`/DeleteJob/${jobId}`)
        return response.data
    } catch (error) {
        console.error("Error deleting job:", error);
        throw error;
    }
}

// Apply job
export const ApplyJob = async (formData) => {
    try {
      const response = await AxiosInstance.post('/ApplyJob', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching Adding the job:", error);
      throw error;
    }
  }
  

