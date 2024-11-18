import React from 'react'

function InquiryBooking() {

const handleBook = async (e)=>{
  e.preventDefault();




}





  return (

    <div>
      <form onSubmit={handleBook} >


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
            <form>
              <h3>Book Your Trip</h3>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name <span className="mandatory-indicator">*</span></label>
                <input type="text"
                  className="form-control"
                  id="name"
                  required
                  onChange={handleChange}

                />
              </div>

              <div className="mb-3">
                <label htmlFor="PhoneNumber" className="form-label">Phone Number <span className="mandatory-indicator">*</span></label>
                <input type="number"
                  className="form-control"
                  id="PhoneNumber"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email"
                  className="form-control"
                  id="email"
                  onChange={handleChange}

                />
              </div>



              {/* <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control" id="date" />
              </div> */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

      </form>


    </div>
  )
}

export default InquiryBooking