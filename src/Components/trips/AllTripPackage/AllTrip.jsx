import React from 'react'
import './allTrip.css'

function AllTrip() {
    return (
        <div className="trip-list">
          <h2>All Trips</h2>
          <div className="trip-container">
              <div  className="trip-card">
                <h3>TripTitle</h3>
                <p><strong>Locations:</strong> TripLocations</p>
                <p><strong>Duration:</strong> TripDuration</p>
                <p><strong>Flights:</strong> Flights</p>
                <p><strong>Hotels:</strong> trip.Hotels</p>
                <p><strong>Activities:</strong>trip.Activities</p>
                <p><strong>Amount:</strong> trip.TripAmount</p>
                <p><strong>Discount Amount:</strong> trip.TripDiscountAmount</p>
                tripTripFile && (
                  <img src='' alt="Trip" className="trip-image" />
                )
              </div>
            ))
          </div>
        </div>
      );
    }
    

export default AllTrip