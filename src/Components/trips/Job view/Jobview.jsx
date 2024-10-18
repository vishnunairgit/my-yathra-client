import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteJob, getSingleJob } from '../../../Api/Job'
import './jobview.css'
import { calculateTimeAgo, formatDate } from '../../../Helpers/Helpers';
import Loading from '../../Loading/Loading';



function Jobview() {
    const navigate = useNavigate()
    const { jobId } = useParams();
    const [job, setjob] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null)


    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const jobData = await getSingleJob(jobId)
                setjob(jobData)
            } catch (error) {
                seterror(error)
            }finally {
                setLoading(false);
            }
        }
        fetchJobDetails();
    }, [jobId])

    if (loading) {
        return (
            <Loading />
        );
    };

    if (error) {
        return <div>{error.message};</div>
    }

    const handleBack = () => {
        navigate('/Home')
    }

    const handleEdit = () => {
        navigate(`/EditJob/${jobId}`);
    }

    const handleDelete = async () => {

        if (window.confirm('Are you sure you want to delete this job?')) {
            try {
                const response = await deleteJob(jobId);
                alert(response.message)
                navigate('/Alljobs');
            } catch (error) {
                seterror(error);
                alert(error.response?.data?.message || 'Error deleting job. Please try again.');
            }
        }
    }
    if (loading) {
        return (
            <Loading />
        );
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (

        <div>
            <div className='jobView'>
                <div className="job-card" >
                    <div className='title'>
                        <div className='job-title'>
                            <div><strong>{job.JobTitle}</strong></div>
                        </div>

                        <div className='Active'>
                            <p>{job.status === "active" ? (
                                <button style={{ backgroundColor: 'green' }} type="button">Active</button>
                            ) : (
                                <button style={{ backgroundColor: "red" }} type="button">Inactive</button>
                            )}</p>
                        </div>
                    </div>

                    <div className='Job-First-box'>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Location</strong>
                            </div>
                            <div className="">: {job.Location} </div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Qualifications</strong>
                            </div>
                            <div className="">: {job.Qualifications} </div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Experience</strong>
                            </div>
                            <div className="">: {job.Experience} years</div>
                        </div>

                        <div className="jobRow Applicants "  >
                            <div className="jobLabel">
                                <strong>No of Applicants</strong>
                            </div>
                            {/* <div className="">: {job?.AppliedStudents?.length}</div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='jobView'>
                <div className="job-card" >
                    <h4 className=''> <strong>JOB DESCRIPTION</strong></h4>

                    <div className='Job-second-box'>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Role</strong>
                            </div>
                            <div className="">: {job?.JobTitle} </div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Salary</strong>
                            </div>
                            <div className="">: {job?.Salary ? `${job?.Salary} Lacs P.A. ` : "Not Disclosed"}</div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Openings</strong>
                            </div>
                            <div className="">: {job.Openings} </div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Employment Type:</strong>
                            </div>
                            <div className="">: {job?.EmploymentType} </div>
                        </div>

                        <div className="jobRow">
                            <div className="jobLabel">
                                <strong>Keyskills</strong>
                            </div>
                            <div className="">: {job?.Keyskills ? job.Keyskills.split(' ').join(' / ') : "No key skills provided"} </div>
                        </div>

                        <div className='jobRow'>
                            {job?.
                                Description
                                && (
                                    <div >
                                        <strong>Requirements:</strong>
                                        <ul>
                                            {job?.
                                                Description?.split('\n').map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className='Job-Date-box'>
                        <div><strong>Job Post Date : </strong>{formatDate(job?.Date)}</div>
                        <div><strong>Posted : </strong>{calculateTimeAgo(job?.Date)}</div>
                    </div>

                    <div className='bottum-button'>
                        <button className='button_02' type="button" onClick={handleBack}>Back</button>
                        <button className='button_01' type="button" onClick={handleEdit} >Edit</button>
                        <button className='button_03' type="button" onClick={handleDelete}>delete</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Jobview