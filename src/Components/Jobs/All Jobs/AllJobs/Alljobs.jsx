import React, { useEffect, useState } from 'react';
import { getJobs } from '../../../../Api/Job';
import AllJobsCard from '../Alljobs Cards/AllJobsCard';
import { useSelector } from 'react-redux';
import Loading from '../../../Loading/Loading';
import JobApplicationsChart from './JobApplicationsChart';


function Alljobs() {
    const userId = useSelector(state => state.user.userDetails.userId);
    const [AllJobs, setAllJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null);
    const [chartData, setchartData] = useState({})


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = await getJobs(userId);
                setAllJobs(jobData)

                const JobTitle = jobData.map(job => job.JobTitle);
                const jobCount = jobData.map(job => job?.AppliedStudents || 0);

                setchartData({
                    labels: JobTitle,
                    datasets: [{
                        label: 'Number of Applications',
                        data: jobCount,
                    }]
                })

            } catch (error) {
                seterror(error)
            } finally {
                setLoading(false);
            }

        }
        if (userId) {
            fetchJobs();
        }

    }, [userId]);

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

            <JobApplicationsChart chartData={chartData} />

            {AllJobs.length > 0 ? (
                AllJobs.map((job) => <AllJobsCard key={job._id} job={job} />)
            ) : (
                <h4 style={{ alignItems: 'center' }}>No Job Posted </h4>
            )
            }

        </div>
    )
}

export default Alljobs


