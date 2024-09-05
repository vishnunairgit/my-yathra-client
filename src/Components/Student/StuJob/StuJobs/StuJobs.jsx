
import React, { useState, useEffect } from 'react';
import { getAllJob } from '../../../../Api/Job';
import './stujobs.css';
import StuJobCard from './Stujobcard/StuJobCard';
import Loading from '../../../Loading/Loading';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../../../Constants/BaseUrl';
import Location from "../../../Assets/icons8-location-24 (1).png";
import salary from "../../../Assets/icons8-rupee-24.png"
import { calculateTimeAgo, formatDate } from '../../../../Helpers/Helpers';

function Alljobs() {
    // const userId = useSelector(state => state.user.userDetails.userId);
    const [allJobs, setAllJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = await getAllJob();
                setAllJobs(jobData);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchJobs();

    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="jobs-container">
            <div className="jobs-list">
                {allJobs.length > 0 ? (
                    allJobs.map((job) => (
                        <div
                            key={job._id}
                            className="job-item"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="job-details">
                                <div className="job-logo">
                                    {job.CreatedBy?.Logo ? (
                                        <img className="logo" src={`${BASE_URL}/UserFiles/${job.CreatedBy?.Logo}`} alt="Company Logo" />
                                    ) : (
                                        <p>No logo</p>
                                    )}
                                </div>
                                <div className="job-info">
                                    <h5><strong>{job.JobTitle}</strong></h5>
                                    <h5><strong>{job?.CreatedBy.UserName}</strong></h5>
                                    <div className="jobRow">
                                        <div className="jobLabel">
                                            <strong><img src={Location} alt="" /></strong>
                                        </div>
                                        <div className="">: {job?.Location} </div>
                                    </div>
                                    <div className="jobRow">
                                        <div className="jobLabel">
                                            <strong><img src={salary} alt="" /></strong>
                                        </div>
                                        <div className="">: {job?.Salary} Lacs P.A. </div>
                                    </div>
                                    <div className="Job-Date-box">
                                        <div><strong>Posted: </strong>{calculateTimeAgo(job?.Date)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-jobs">No jobs available</div>
                )}
            </div>
            <div className="job-details-container">
                <StuJobCard job={selectedJob} />
            </div>
        </div>
    );

}

export default Alljobs;
