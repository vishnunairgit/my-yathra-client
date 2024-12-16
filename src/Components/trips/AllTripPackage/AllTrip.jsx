

import React, { useEffect, useState } from 'react';
import './allTrip.css';
import { GetTrips } from '../../../Api/Trips';
import Loading from '../../Loading/Loading';
import { BASE_URL } from '../../../Constants/BaseUrl';
import { useNavigate } from 'react-router-dom';

function AllTrip() {
  const [AllTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await GetTrips();
        if (Array.isArray(tripData)) {
          setAllTrips(tripData);
        } else {
          setError(new Error("Invalid response format"));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-message">Error: {error.message || "Something went wrong"}</div>;
  }

  if (AllTrips.length === 0) {
    return <div className="no-trips-message">No trips available at the moment.</div>;
  }

  const handleEdit = (tripId) => {
    navigate(`/UpdateTrip/${tripId}`);
  };

  return (
    <div className="ALLtrip-list">
      <h2>All Trips</h2>
      <div className="trip-container">
        {AllTrips.map((trip) => (
          <div className="trip-card" key={trip._id}>
            <h3>{trip?.TripTitle || "N/A"}</h3>
            <p><strong>Locations:</strong> {trip?.TripLocations || "N/A"}</p>
            <p><strong>Duration:</strong> {trip?.TripDuration || "N/A"}</p>
            <p><strong>Flights:</strong> {trip?.Flights || "N/A"}</p>
            <p><strong>Hotels:</strong> {trip?.Hotels || "N/A"}</p>
            <p><strong>Activities:</strong> {trip?.Activities || "N/A"}</p>
            <p><strong>Amount:</strong> {trip?.TripAmount || "N/A"}</p>
            <p><strong>Discount Amount:</strong> {trip?.TripDiscountAmount || "N/A"}</p>

            {trip.TripFile ? (
              <img
                className="trip-image"
                src={`${BASE_URL}/UserFiles/${trip?.TripFile.split('\\').pop()}`}
                alt="trip-image"
              />
            ) : (
              <p>No image available</p>
            )}

            <input
              className="button_01"
              type="button"
              value="Edit"
              onClick={() => handleEdit(trip?._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTrip;
