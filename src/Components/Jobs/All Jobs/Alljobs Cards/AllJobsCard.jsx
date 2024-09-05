
import React from 'react';
import './alljobcard.css';
import bag from '../../../Assets/icons8-bag-24.png';
import cash from '../../../Assets/icons8-rupee-24.png';
import location from '../../../Assets/icons8-location-24 (1).png';
import { calculateTimeAgo } from '../../../../Helpers/Helpers';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../../Constants/BaseUrl';

function AllJobsCard({ job }) {
  const navigate = useNavigate();

  const handleJobView = () => {
    navigate(`/Jobview/${job._id}`);
  }

  return (
    <div className="container" onClick={handleJobView}>
      <div className="job-card">

        <div className="header">

          <div className="header-left">
            <h5><strong>{job.JobTitle}</strong></h5>
            <h6>{job.CreatedBy?.UserName}</h6>
          </div>

          <div className="active-status">
            <p>
              {job.status === "active" ? (
                <button style={{ backgroundColor: 'green' }} type="button">Active</button>
              ) : (
                <button style={{ backgroundColor: 'red' }} type="button">Inactive</button>
              )}
            </p>
          </div>

          <div className="header-right">
          <div>
                
                {job.CreatedBy?.Logo ? (
                  <img className="logo" src={`${BASE_URL}/UserFiles/${job.CreatedBy?.Logo}`}  />
                ) : (
                  <p>No logo available</p>
                )}
              </div>
          </div>
        </div>

        <div className="details">
          <div className="experience">
            <div><img src={bag} alt="Bag Icon" />: {job?.Experience} Years</div>
            <div><img src={cash} alt="Cash Icon" />: {job?.Salary ? `${job?.Salary} Lacs P.A.` : "Not Disclosed"}</div>
            <div><img src={location} alt="Location Icon" />: {job?.Location}</div>
          </div>

          <div className="skills">
            <div>
              <span>Keyskills: </span>
              {job?.Keyskills ? job.Keyskills.split(' ').join(' / ') : "No key skills provided"}
            </div>
          </div>

        </div>

        <div className="footer">
          <div className="date">{calculateTimeAgo(job?.Date)}</div>
        </div>
        
      </div>
    </div>
  )
}

export default AllJobsCard;
