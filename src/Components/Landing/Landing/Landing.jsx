
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import LandingNav from '../Landing-Nav/LandingNav';
import './landing.css';
import companyimg from '../../Assets/my-yathra/company-img.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Flight from '../../Assets/my-yathra/icons8-plane-24.png';
import Hotels from '../../Assets/my-yathra/icons8-hotel-24.png';
import Activities from '../../Assets/my-yathra/icons8-trekking-24.png';
import Rupee24 from '../../Assets/my-yathra/icons8-rupee-24.png';
import Rupee16 from '../../Assets/my-yathra/icons8-rupee-16.png';
import instagram from '../../Assets/my-yathra/icons8-instagram-35.png'
import FaceBook from '../../Assets/my-yathra/icons8-facebook-35.png'
import logo from '../../Assets/my-yathra/logo.jpeg';


import { GetTrips, GetMycompany } from '../../../Api/Trips';
import Loading from '../../Loading/Loading';
import { BASE_URL } from '../../../Constants/BaseUrl';
import InquiryBooking from '../Inquiry-book/InquiryBooking';



function Landing() {


  const [allTrips, setAllTrips] = useState([]);
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [internationalTrips, setInternationalTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const handleInstagram = () => {
    const InstagramkUrl = allTrips[0]?.CreatedBy?.Instagram;
    if (InstagramkUrl) {
      window.open(InstagramkUrl, '_blank');
    } else {
      console.error("Facebook URL not available");
    }
  };

  const handleFaceBook = () => {
    const facebookUrl = allTrips[0]?.CreatedBy?.FaceBook; // Assuming `facebookLink` contains the URL
    if (facebookUrl) {
      window.open(facebookUrl, '_blank');
    } else {
      console.error("Facebook URL not available");
    }
  };

  const handleLocation = () => {
    window.open('https://maps.app.goo.gl/vadmQUGPhzJgrD916/', '_blank');
  }


  // trip details
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        debugger
        const tripData = await GetTrips();
        setAllTrips(tripData);
        const domestic = tripData.filter(trip => trip.TripType === 'domestic');
        const international = tripData.filter(trip => trip.TripType === 'international');
        setDomesticTrips(domestic);
        setInternationalTrips(international);

      } catch (error) {
        setErrors(error);
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
  if (errors) {
    return <div>Error: {errors.message || 'Something went wrong'}</div>;
  }

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='landing-page' >
      <LandingNav />

      <div className="scrolling-text-container">
        <div className="scrolling-text">Welcome To My Yathra</div>
      </div>

      <div className='Trip-main'>

        {/* company Image and text */}
        <div class="CompanyMainImg-container">
          <img src={companyimg} alt="Image Description" class="CompanyMainImg-image" />
          <div class="CompanyMainImg-overlay"></div>
          <div class="CompanyMainImg-text-1">Enjoy Your Vacation With Us</div>
          <div class="CompanyMainImg-text-2">I have found out that there ain't no surer way to find out whether you like people or hate them than to travel with them</div>
        </div>
        {/* Domestic Packages Carousel */}
        <div className="trips-details">
          <h4>Domestic Packages</h4>
          <Slider {...settings}>
            {domesticTrips.map((trip) => (
              <div key={trip.id} className="trip-card">

                <h4>{trip.TripTitle}</h4>
                {trip.TripFile ? (
                  <img className="trip-image" src={`${BASE_URL}/UserFiles/${trip.TripFile.split('\\').pop()}`} alt="trip-image" />
                ) : (
                  <p>No logo</p>
                )}

                <div className="trip-details">
                  <h4>{trip.TripLocations}</h4>
                  <p>{trip.TripDuration}</p>

                  <div className='Trip-data'>
                    <div className='trip-flight'>
                      <img src={Flight} alt="Flights" />
                      <p> {trip.Flights} Flights </p>
                    </div>

                    <div className='trip-Hotels'>
                      <img src={Hotels} alt="Hotels" />
                      <p>{trip.Hotels} Hotels</p>
                    </div>

                    <div className='trip-activities'>
                      <img src={Activities} alt="Activities" />
                      <p>{trip.Activities} Activities</p>
                    </div>
                  </div>

                  <div className="trip-price">
                    <div className="trip-price-normal">
                      <div className="price-row">
                        <img src={Rupee16} alt="Normal Price" />
                        <p>{trip.TripAmount}/-</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>

                    <div className="trip-price-discount">
                      <div className="price-row">
                        <img src={Rupee24} alt="Discounted Price" />
                        <p>{trip.TripDiscountAmount}/-</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>
                  </div>

                  <button className="button_01">Book Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* International Packages Carousel */}
        <div className="trips-details">
          <h4>International Packages</h4>
          <Slider {...settings}>
            {internationalTrips.map((trip) => (
              <div key={trip.id} className="trip-card">

                <h4>{trip.TripTitle}</h4>
                {trip.TripFile ? (
                  <img className="trip-image" src={`${BASE_URL}/UserFiles/${trip.TripFile.split('\\').pop()}`} alt="trip-image" />
                ) : (
                  <p>No logo</p>
                )}
                <div className="trip-details">
                  <h4>{trip.TripLocations}</h4>
                  <p>{trip.TripDuration}</p>

                  <div className='Trip-data'>
                    <div className='trip-flight'>
                      <img src={Flight} alt="Flights" />
                      <p> {trip.Flights} Flights </p>
                    </div>

                    <div className='trip-Hotels'>
                      <img src={Hotels} alt="Hotels" />
                      <p>{trip.Hotels} Hotels</p>
                    </div>

                    <div className='trip-activities'>
                      <img src={Activities} alt="Activities" />
                      <p>{trip.Activities} Activities</p>
                    </div>

                  </div>

                  <div className="trip-price">
                    <div className="trip-price-normal">
                      <div className="price-row">
                        <img src={Rupee16} alt="Normal Price" />
                        <p>{trip.TripAmount}/-</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>

                    <div className="trip-price-discount">
                      <div className="price-row">
                        <img src={Rupee24} alt="Discounted Price" />
                        <p>{trip.TripDiscountAmount}/-</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>
                  </div>
                  <button className="button_01">Book Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Trip carousal and inquiry */}
        <InquiryBooking />

        {/* about us */}
        <div className='aboutus-landing'>
          <h3>ABOUT US</h3>
          <div>{allTrips[0].CreatedBy.About}</div>
        </div>

        {/* bottom nav */}
        <div className='bottomlanding'>
          <div className='bottomlanding-1'>
            <div className='first'>
              <div className='companydetails'>
                <img src={logo} alt="" />
                <h5><strong> {allTrips[0].CreatedBy.CompanyName}</strong></h5>
              </div>
            </div>
            <div className='Second'>
              <h5><strong>Address :</strong> </h5>
              <h4><strong>{allTrips[0].CreatedBy.CompanyName}</strong></h4>
              <div>{allTrips[0].CreatedBy.Address}</div>
            </div>


            <div className='Third'>
              <h5><strong>Contact :</strong></h5>
              <div>
                <div>{allTrips[0].CreatedBy.Phonenumber}</div>
                <div>{allTrips[0].CreatedBy.Email}</div>
              </div>
            </div>
          </div>


          <div className='bottomlanding-2'>
            <img src={instagram} alt="linkedin" title='instagram' onClick={handleInstagram} />
            <img src={FaceBook} alt="website" title='FaceBook' onClick={handleFaceBook} />
          </div>


        </div>

      </div>


    </div>
  );
}

export default Landing;
