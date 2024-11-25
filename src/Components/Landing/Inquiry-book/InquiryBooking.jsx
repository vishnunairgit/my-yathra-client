import React, { useState } from 'react'
import companyimg from '../../Assets/my-yathra/company-img.jpeg';
import { BookNow } from '../../../Api/BookNow'
import { useNavigate } from 'react-router-dom';
import "./booking.css"


function InquiryBooking() {

  const navigate = useNavigate();

  const [booknow, setbooknow] = useState({
    UserName: "",
    UserPhoneNumber: "",
    userEmail: "",
  });



  const handlebooking = (e) =>{
    const {name , value} = e.target 
    setbooknow({...booknow,[name]:value});
  };

  const handleBookNow = async (e)=> {
    e.preventDefault();

    try {
      const BookNowdata = {...booknow,
        Date: new Date().toISOString(), 
      };
      await BookNow(BookNowdata);
      alert('Thank you for choosing MY YATHRA. You will receive a call back shortly');
      navigate('/')
    } catch (error) {
      console.error("Error updating user:", error);
      alert('An error occurred while adding the trip');

    }
  }

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
          <form onSubmit={handleBookNow} >
            <h3>Book Your Trip</h3>
            <div className="mb-3">
              <label htmlFor="UserName"
                className="form-label">Name <span className="mandatory-indicator">*</span>
              </label>
              <input
                type="text"
                name="UserName"
                className="form-control"
                onChange={handlebooking}
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserPhoneNumber"
                className="form-label">Phone Number <span className="mandatory-indicator">*</span></label>
              <input
                type="text"
                className="form-control"
                name='UserPhoneNumber'
                onChange={handlebooking}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">Email </label>
              <input
              type="email"
              className="form-control"
              name='userEmail'
              onChange={handlebooking}
              placeholder="Enter your email Id"
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

