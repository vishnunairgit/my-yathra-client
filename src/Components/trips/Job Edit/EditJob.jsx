import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleJob, updateJob } from '../../../Api/Job';
import { formatDateForInput } from '../../../Helpers/Helpers';
import Loading from '../../Loading/Loading';
import './editjob.css'


function EditJob() {

  const { jobId } = useParams();
  const [job, setjob] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null)
  const [formData, setformData] = useState({})
  const navigate = useNavigate();


  useEffect(() => {

    const fetchJobDetails = async () => {
      try {
        const jobData = await getSingleJob(jobId)
        setjob(jobData);
        setformData(jobData);
      } catch (error) {
        seterror(error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobDetails();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const handleSave = async () => {
    try {
      await updateJob(jobId, formData);
      alert('Job updated successfully!');
      navigate(`/Jobview/${jobId}`)

    } catch (error) {
      seterror(error);
    }
  };

  if (loading) {
    return (
      <Loading />
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleBack = () => {
    navigate(`/Jobview/${jobId}`)
  }



  return (
    <div className="addjob">
      <h3>EDIT JOB</h3>
      <form>
        <div className="container">
          <div className="leftSide-container">

            <div className="row">
              <div className="col-25">
                <label htmlFor="JobTitle">
                  JOB TITLE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="JobTitle"
                  name="JobTitle"
                  placeholder="Job Title..."
                  value={formData.JobTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Experience">
                  EXPERIENCE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Experience"
                  name="Experience"
                  placeholder="3-5..."
                  value={formData?.Experience || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Location">
                  JOB LOCATION <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  placeholder="Job Location..."
                  value={formData?.Location || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Qualifications">
                  EDUCATIONAL QUALIFICATION <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Qualifications"
                  name="Qualifications"
                  placeholder="Qualifications..."
                  value={formData?.Qualifications || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="EmploymentType">
                  EMPLOYMENT TYPE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                  type="text"
                  id="EmploymentType"
                  name="EmploymentType"
                  placeholder="EmploymentType..."
                  value={formData.EmploymentType || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value=''>Select Employment Type</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Work From Office">Work From Office</option>

                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Openings">
                  NO OFF OPENINGS <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Openings"
                  name="Openings"
                  placeholder="3..."
                  value={formData.Openings || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Date">
                  JOB POST DATE<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="Date"
                  id="Date"
                  name="Date"
                  placeholder="Date..."
                  value={formatDateForInput(formData?.Date || '')}
                  onChange={handleInputChange}

                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Salary">
                  SALARY
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Salary"
                  name="Salary"
                  placeholder="2.5 - 3.5 Lacs P.A."
                  value={formData.Salary || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="status">STATUS
                </label>
              </div>
              <div className="col-75">
                <select
                  type="text"
                  name="status"
                  id="status"
                  value={formData?.status || ''}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Keyskills">
                  KEY SKILLS<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Keyskills"
                  name="Keyskills"
                  placeholder="node.js react.js "
                  value={formData?.Keyskills || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Job Description">
                  JOB DESCRIPTION<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <textarea
                  id="Description"
                  name="Description"
                  placeholder="Enter Description, each point on a new line..."
                  value={formData.Description || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>


          </div>
        </div>

        <div className="buttonHolder">
          <button className="button_03" type="button" onClick={handleBack}>
            Back
          </button>

          <button className="button_01" type="submit" onClick={handleSave}>
            Submit
          </button>
        </div>
      </form>
    </div>

  )
}

export default EditJob