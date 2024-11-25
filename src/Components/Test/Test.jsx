

import React, { useState } from 'react';
import './addtrips.css';
import { Addjob } from '../../../Api/Job';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddTrips() {
  const navigate = useNavigate();

  const companyId = useSelector(state => state.company.companyDetails.companyId);

  // console.log(companyId,'-------companyId----------');

  const [addTrips, setaddTrips] = useState({
    CreatedBy: "",
    TripTitle: '',
    TripLocations: '',
    TripDuration: '',
    Flight: '',
    Hotels: '',
    Activities: '',
    Amount:'',
    DiscountAmount: '',
    
  })

  const handleChange = (e)=>{
    const {name , value} = e.target 
    setaddTrips({...addTrips,[name]:value})
  }

  const handleaddTripPost = async (e)=>{
    e.preventDefault();

    try {
      const addJobData = {...addTrips, CreatedBy:companyId,      
         Date: new Date().toISOString(), 
      };
      const response = await Addjob(addJobData);

      if (response.message === 'Job added and notification sent successfully') {
        alert('job added successful')
        navigate('/Alljobs')
      }else {
        alert('Internal Server Error')
      }      
    } catch (error) {
      console.log(error); 
      alert('An error occurred while adding the job');
    }
  }

  return (
    <div className="addjob">
      <h3>ADD A TRIP</h3>
      <form onSubmit={handleaddTripPost} >
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
                  name="JobTitle"
                  placeholder="Job Title..."
                  onChange={handleChange}
                  value={addJobs.JobTitle}
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
                  name="Experience"
                  placeholder="3-5..."
                  onChange={handleChange}
                  value={addJobs.Experience}
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
                  name="Location"
                  placeholder="Job Location..."
                  onChange={handleChange}
                  value={addJobs.Location}
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
                  onChange={handleChange}
                  value={addJobs.Qualifications}
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
                  onChange={handleChange}
                  value={addJobs.EmploymentType}
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
                  onChange={handleChange}
                  value={addJobs.Openings}
                  required
                />
              </div>
            </div>

            {/* <div className="row">
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
                  onChange={handleChange}
                  value={addJobs.Date}
                  required
                />
              </div>
            </div> */}

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
                  onChange={handleChange}
                  value={addJobs.Salary}
                  required
                />
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
                  onChange={handleChange}
                  value={addJobs.Keyskills}
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
                  // type="text"
                  id="Description"
                  name="Description"
                  placeholder="Enter Description, each point on a new line..."
                  onChange={handleChange}
                  value={addJobs.Requirements}
                  required
                />
              </div>
            </div>


          </div>
        </div>

        <div className="buttonHolder">
          <button className="button_03" type="button">
            Back
          </button>

          <button className="button_02" type="reset">
            Reset
          </button>

          <button className="button_01" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTrips;


