import React, { useState } from 'react';
import './ApplyJob.css';
import { ApplyJob } from '../../../../Api/Job';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ApplyJobs() {

  const { jobId } = useParams();
  const userId = useSelector(state => state.user.userDetails.userId);


  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    resume: null,
  });

  const [statusMessage, setStatusMessage] = useState('');
  const handleChange = (e)=>{
    const {name , value} = e.target 
    setApplicationData({...applicationData,[name]:value})
  }


  // const handleFileChange = (e) => {
  //   setApplicationData(e.target.files[0]);
  // };
  const handleFileChange = (e) => {
    setApplicationData({ ...applicationData, resume: e.target.files[0] });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();



    const formData = new FormData();
    formData.append('job', jobId);
    formData.append('user', userId);


    if (applicationData.coverLetter) {
      formData.append('coverLetter', applicationData.coverLetter);
    }
    if (applicationData.resume) {
      formData.append('resume', applicationData.resume);  // Ensure this matches the multer field name
    }

    try {
      const response = await ApplyJob(formData); // Ensure formData is passed here
      setStatusMessage('Application submitted successfully!');
    } catch (error) {
      setStatusMessage('Failed to submit application. Please try again.');
      console.error("Error:", error);
    }
  }

  return (
    <div className="applied-job-container">
      <h2 className="form-title">Apply for Job</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Cover Letter:</label>
          <textarea
            name='coverLetter'
            className="form-input"
            required
            onChange={handleChange}
            value={applicationData.coverLetter}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Resume:</label>
          <input
            className="form-input"
            name="resume"  // Ensure this matches the name in Multer config
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleFileChange}
          />

        </div>
        <button className="submit-button" type="submit">Submit Application</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default ApplyJobs;
