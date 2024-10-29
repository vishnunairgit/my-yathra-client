import React, { useState } from 'react'
import './addtrips.css'
import { AddTrip } from '../../../Api/Trips';


function Addtrips() {

  const [trip, settrip] = useState({

    TripTitle: " ",
    TripLocations: " ",
    TripDuration: "",
    Flights: "",
    Hotels: "",
    Activities: "",
    TripAmount: "",
    TripDiscountAmount: "",

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    settrip({ ...trip, [name]: value })
  }

  const handletrip = async (e) => {
    e.preventDefault();


    try {

      const AddTripData = {
        ...trip,
        Date: new Date().toISOString()
      }
      const response = await AddTrip(AddTripData)
      if (response.message === 'trip data Added successfully') {
        alert('Job Added successfully')
      } else {
        alert('Internal Server Error')
      }

    } catch (error) {
      console.log(error);
      alert('An error occurred while adding the job');
    }
  }





  return (


    <div className='Trip'>
      <h3>Add A TRIP</h3>
      
      <form onSubmit={handletrip} >

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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                  // value={addJobs.JobTitle}
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
                <select name="tripType" onChange={handleChange} >
                  <option value="" disabled selected>
                    Select Trip Type
                  </option>
                  <option value="">No Selection</option>
                  <option value="international">INTERNATIONAL</option>
                  <option value="domestic">DOMESTIC</option>
                </select>
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
  )
}

export default Addtrips


