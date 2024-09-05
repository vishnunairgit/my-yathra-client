import React from 'react';
import './stujobcard.css'
import { calculateTimeAgo, formatDate } from '../../../../../Helpers/Helpers';
import { useNavigate, useParams } from 'react-router-dom';

function StuJobCard({ job }) {

  const navigate = useNavigate()


  if (!job) {
    return <div>Select a job to see details</div>;
  }

  const handleApplyJob = () => {
    navigate(`/student/ApplyJob/${job._id}`);

  }
  

  return (
    <div className="stujob-view">
        <div className="job-card">
            <div className="job-title">
                <h3><strong>{job.JobTitle}</strong></h3>
                <button className="button_01" onClick={handleApplyJob}>Apply Now</button>
            </div>

            <div className="job-info-section">
                <div className="jobRow">
                    <div className="jobLabel"><strong>Company</strong></div>
                    <div>: {job.CreatedBy.UserName}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Location</strong></div>
                    <div>: {job.Location}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Qualifications</strong></div>
                    <div>: {job.Qualifications}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Experience</strong></div>
                    <div>: {job.Experience} years</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Role</strong></div>
                    <div>: {job.JobTitle}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Salary</strong></div>
                    <div>: {job.Salary ? `${job.Salary} Lacs P.A.` : "Not Disclosed"}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Openings</strong></div>
                    <div>: {job.Openings}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Employment Type</strong></div>
                    <div>: {job.EmploymentType}</div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel"><strong>Key Skills</strong></div>
                    <div>: {job.Keyskills ? job.Keyskills.split(' ').join(' / ') : "No key skills provided"}</div>
                </div>

                {job.Description && (
                    <div className="job-description">
                        <strong>Requirements:</strong>
                        <ul>
                            {job.Description.split('\n').map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="job-date-box">
                    <div><strong>Job Post Date:</strong> {formatDate(job.Date)}</div>
                    <div><strong>Posted:</strong> {calculateTimeAgo(job.Date)}</div>
                </div>

                <div className="bottom-button">
                    {/* Uncomment and add functionality if needed */}
                    {/* <button className="button-back" type="button" onClick={handleBack}>Back</button> */}
                    {/* <button className="button-edit" type="button" onClick={handleEdit}>Edit</button> */}
                    {/* <button className="button-delete" type="button" onClick={handleDelete}>Delete</button> */}
                </div>
            </div>
        </div>
    </div>
);

}

export default StuJobCard