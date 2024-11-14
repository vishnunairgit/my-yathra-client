import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { GetSingleTrip, EditTrip, DeleteTrip  } from '../../../Api/Trips';



function UpdateTrip() {
    const navigate = useNavigate();
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [companyFiles, setCompanyFiles] = useState({
        TripFile: null,
    });


    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const tripData = await GetSingleTrip(tripId)
                setTrip(tripData)
                setTripData(tripData);
            } catch (error) {
                setError("Failed to load trip details.");
                console.error("Error loading trip:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchTrip();
    }, [tripId])

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message || 'Something went wrong'}</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTripData({ ...tripData, [name]: value })
    }

    const uploadCompanyFile = (e) => {
        const file = e.target.files[0];
        setCompanyFiles({ TripFile: file });
    };



    const handleTripEdit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            // Append all other trip data
            for (const key in tripData) {
                formData.append(key, tripData[key]);
            }

            // Append the TripFile if there's one
            if (companyFiles.TripFile) {
                formData.append('TripFile', companyFiles.TripFile);
            }
            // Call EditTrip API to update the trip
            await EditTrip(tripId, formData);
            alert('Trip updated successfully!');
            navigate('/AllTrip')

        } catch (error) {
            console.error("Error in handleTripEdit:", error);
            alert('An error occurred while updating the trip');
        }
    };


    const handleBack = ()=>{
        navigate(-1);
    }

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            try {
                const response = await DeleteTrip(tripId);
                alert(response.message)
                navigate('/AllTrip');
            } catch (error) {
                setError(error);
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

        <div className='Trip'>
            <h3>Add A TRIP</h3>

            <form onSubmit={handleTripEdit} >
                <div className='container'>
                    <div className='Tripcontainer'>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="TripTitle">
                                    TRIP TITLE <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="TripTitle"
                                    placeholder="Trip Title..."
                                    onChange={handleChange}
                                    value={tripData?.TripTitle || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="TripLocations">
                                    TRIP LOCATIONS <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="TripLocations"
                                    placeholder="Trip Locations..."
                                    onChange={handleChange}
                                    value={tripData?.TripLocations || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="TripDuration">
                                    TRIP DURATION <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="TripDuration"
                                    placeholder="2D / 3N ..."
                                    onChange={handleChange}
                                    value={tripData?.TripDuration || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Flights">
                                    NO OFF FLIGHT <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Flights"
                                    placeholder="Flights..."
                                    onChange={handleChange}
                                    value={tripData?.Flights || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Hotels">
                                    NO OFF HOTELS <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Hotels"
                                    placeholder="Hotels..."
                                    onChange={handleChange}
                                    value={tripData?.Hotels || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Activities">
                                    NO OFF ACTIVITIES <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Activities"
                                    placeholder="Trip Activities..."
                                    onChange={handleChange}
                                    value={tripData?.Activities || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="TripAmount">
                                    TRIP AMOUNT <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    name="TripAmount"
                                    placeholder="Trip Amount..."
                                    onChange={handleChange}
                                    value={tripData?.TripAmount || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="TripDiscountAmount">
                                    TRIP DISCOUNT AMOUNT <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    name="TripDiscountAmount"
                                    placeholder="Trip Discount Amount..."
                                    onChange={handleChange}
                                    value={tripData?.TripDiscountAmount || ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="tripType">
                                    TRIP TYPE <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <select name="tripType"
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected>
                                        Select Trip Type
                                    </option>
                                    <option value="">No Selection</option>
                                    <option value="international">INTERNATIONAL</option>
                                    <option value="domestic">DOMESTIC</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="about">UPLOAD IMAGE</label>
                            </div>

                            <div className="col-75">
                                <input
                                    type="file"
                                    name="TripFile"
                                    accept="image/*"
                                    onChange={uploadCompanyFile}

                                />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="buttonHolder">
                    <button className="button_02" type="button" onClick={handleBack}>
                        Back
                    </button>
                    
                   <button className="button_03" type="reset" onClick={handleDelete}>
                     Delete
                   </button>

                    <button className="button_01" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTrip