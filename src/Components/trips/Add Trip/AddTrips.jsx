


import React, { useState } from 'react';
import './addtrips.css';
import { AddTrip } from '../../../Api/Trips';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Addtrips() {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.userDetails.userId);
  console.log(userId, '-----------------------userId------------------');

  const [trip, setTrip] = useState({
    TripTitle: "",
    TripLocations: "",
    TripDuration: "",
    Flights: "",
    Hotels: "",
    Activities: "",
    TripAmount: "",
    TripDiscountAmount: "",
    TripType: "",
  });

  const [companyFiles, setCompanyFiles] = useState({
    TripFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const uploadCompanyFile = (e) => {
    const file = e.target.files[0];
    setCompanyFiles({ TripFile: file });
  };


  const handleTrip = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('Date', new Date().toISOString());
      formData.append('CreatedBy', userId);  // Make sure `userId` is a single string, not an array.

      for (const key in trip) {
        formData.append(key, trip[key]);
      }

      if (companyFiles.TripFile) {
        formData.append('TripFile', companyFiles.TripFile);
      }

      const response = await AddTrip(formData);

      if (response.message === 'Trip data Added successfully') {
        alert('Trip added successfully');
        navigate('/Home');
      } else {
        alert('Internal Server Error');
      }
    } catch (error) {
      console.error("Error in handletrip:", error);
      alert('An error occurred while adding the trip');
    }
  };


  return (

    <div className='Trip'>
      <h3>Add A TRIP</h3>

      <form onSubmit={handleTrip} >

        <div className='container'>
          <div className='Tripcontainer'>

            {/*Trip Titel  */}
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

            {/*Trip Location  */}
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

            {/*Trip Duration  */}
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

            {/* Trip Flights  */}
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

            {/* Trip Hotels  */}
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

            {/* Trip Activities  */}
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

            {/*  TripAmount  */}
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

          
            {/*  TripDiscountAmount  */}
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

            {/* tripType  */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="TripType">
                  TRIP TYPE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select name="TripType" onChange={handleChange} >
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


