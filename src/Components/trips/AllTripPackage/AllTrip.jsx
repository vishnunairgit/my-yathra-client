import React, { useEffect, useState } from 'react'
import './allTrip.css'
import { GetTrips } from '../../../Api/Trips'
import Loading from '../../Loading/Loading';
import { BASE_URL } from '../../../Constants/BaseUrl';



function AllTrip() {

  const [AllTrips, setAllTrips] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await GetTrips();
        setAllTrips(tripData)

      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchTrips();
  }, [])


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className="trip-list">
      <h2>All Trips</h2>
      <div className="trip-container">
        {AllTrips.map((trip) => {
          return (
            <div className="trip-card" key={trip._id}>
              <h3>{trip.TripTitle}</h3>
              <p><strong>Locations:</strong> {trip.TripLocations}</p>
              <p><strong>Duration:</strong> {trip.TripDuration}</p>
              <p><strong>Flights:</strong> {trip.Flights}</p>
              <p><strong>Hotels:</strong> {trip.Hotels}</p>
              <p><strong>Activities:</strong> {trip.Activities}</p>
              <p><strong>Amount:</strong> {trip.TripAmount}</p>
              <p><strong>Discount Amount:</strong> {trip.TripDiscountAmount}</p>

              {trip.TripFile ? (
                <img className="trip-image" src={`${BASE_URL}/UserFiles/${trip.TripFile.split('\\').pop()}`} alt="trip-image" />
              ) : (
                <p>No logo</p>
              )}

              <input className='button_01' type="button" value="edit" />

            </div>
          );
        })}


      </div>

    </div>
  );
}

export default AllTrip;


