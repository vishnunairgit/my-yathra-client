import React, { useState } from 'react'
import companyimg from '../../Assets/my-yathra/company-img.jpeg';
import { BookNow } from '../../../Api/BookNow'
import { useNavigate } from 'react-router-dom';


function InquiryBooking() {

  const navigate = useNavigate();

  const [booknow, setbooknow] = useState({
    Name: '',
    Number: '',
    Email: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setbooknow({ ...booknow, [name]: value });
  };

  // const handleBookNow = async (e) => {
  //   e.preventDefault();

  //   // Validate the PhoneNumber field
  //   if (!booknow.Number) {
  //     alert("Phone number is required!");
  //     return;
  //   }

  //   try {
  //     const BookNowdata = {
  //       ...booknow,
  //       Date: new Date().toISOString(),
  //     };

  //     await BookNow(BookNowdata);
  //     alert('Booking successful!');
  //     navigate('/');

  //   } catch (error) {

  //     console.error("Error updating user:", error);
  //     alert('An error occurred while adding the trip');

  //   }
  // }

  const handleBookNow = async (e) => {
    e.preventDefault();

    console.log("Current booknow state:", booknow); // Debugging

    // Validate the PhoneNumber field
    if (!booknow.Number) {
      alert("Phone number is required!");
      return;
    }

    try {
      const BookNowdata = {
        ...booknow,
        Date: new Date().toISOString(),
      };

      await BookNow(BookNowdata);
      alert('Booking successful!');
      navigate('/');

    } catch (error) {
      console.error("Error updating user:", error);
      alert('An error occurred while adding the trip');
    }
  };

  return (
    <div>

      <div className="carousal-inquiry d-flex">
        {/* Left side: Carousel */}
        <div className="trip-img flex-grow-1">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={companyimg} className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={companyimg} className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={companyimg} className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right side: Form or Other Content */}
        <div className="inquiry-bookTrip flex-grow-1 d-flex justify-content-center align-items-center">
                     <h3>Book Your Trip</h3>

         
          <form onSubmit={handleBookNow} >


            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name <span className="mandatory-indicator">*</span></label>
              <input
                type="text"
                name="Number"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter your phone number"

              />
            </div>

            <div className="mb-3">
              <label htmlFor="PhoneNumber"
                className="form-label">Phone Number <span className="mandatory-indicator">*</span></label>
              <input
                type="text"
                className="form-control"
                name='PhoneNumber'
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Email </label>
              <input
                type="email"
                className="form-control"
                name='Email'
                onChange={handleChange}

              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>


        </div>
      </div>



    </div>
  )
}

export default InquiryBooking
