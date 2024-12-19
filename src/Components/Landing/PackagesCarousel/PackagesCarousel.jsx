

// import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './PackagesCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Flight from '../../Assets/my-yathra/icons8-plane-24.png';
import Hotels from '../../Assets/my-yathra/icons8-hotel-24.png';
import Activities from '../../Assets/my-yathra/icons8-trekking-24.png';
import Rupee24 from '../../Assets/my-yathra/icons8-rupee-24.png';
import Rupee16 from '../../Assets/my-yathra/icons8-rupee-16.png';
import { BASE_URL } from '../../../Constants/BaseUrl';

function PackagesCarousel({ domesticTrips = [], internationalTrips = [] }) {

  const handleWhatsApp = (phoneNumber) => {
    if (phoneNumber) {
      const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '');
      const message = encodeURIComponent("Hello! I am contacting you regarding your trip.");
      const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.error("WhatsApp phone number not available");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    

    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      Domestic Packages Carousel
      <div className="trips-details">
        <h5>Domestic Packages</h5>
        <Slider {...settings}>
          {domesticTrips.map((trip) => (
            <div key={trip?.id} className="trip-card">

              <h5>{trip?.TripTitle}</h5>
              {trip?.TripFile ? (
                <img className="trip-image" src={`${BASE_URL}/UserFiles/${trip?.TripFile.split('\\').pop()}`} alt="trip-image" />
              ) : (
                <p>No logo</p>
              )}

              <div className="trip-details">
                <h5>{trip?.TripLocations}</h5>
                <p>{trip?.TripDuration}</p>

                <div className='Trip-data'>
                  <div className='trip-flight'>
                    <img src={Flight} alt="Flights" />
                    <p> {trip?.Flights} Flights </p>
                  </div>

                  <div className='trip-Hotels'>
                    <img src={Hotels} alt="Hotels" />
                    <p>{trip?.Hotels} Hotels</p>
                  </div>

                  <div className='trip-activities'>
                    <img src={Activities} alt="Activities" />
                    <p>{trip?.Activities} Activities</p>
                  </div>
                </div>

                <div className="trip-price">
                  <div className="trip-price-normal">
                    <div className="price-row">
                      <img src={Rupee16} alt="Normal Price" />
                      <p>{trip?.TripAmount}/-</p>
                    </div>
                    <span className="per-person">Per person</span>
                  </div>

                  <div className="trip-price-discount">
                    <div className="price-row">
                      <img src={Rupee24} alt="Discounted Price" />
                      <p>{trip?.TripDiscountAmount}/-</p>
                    </div>
                    <span className="per-person">Per person</span>
                  </div>
                </div>

                <button
                  className="button_01"
                  onClick={() => handleWhatsApp(trip?.CreatedBy?.Phonenumber)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* International Packages Carousel */}
      <div className="trips-details">
        <h5>International Packages</h5>
        <Slider {...settings}>
          {internationalTrips.map((trip) => (
            <div key={trip?.id} className="trip-card">

              <h5>{trip.TripTitle}</h5>
              {trip?.TripFile ? (
                <img className="trip-image" src={`${BASE_URL}/UserFiles/${trip?.TripFile.split('\\').pop()}`} alt="trip-image" />
              ) : (
                <p>No logo</p>
              )}
              <div className="trip-details">
                <h5>{trip?.TripLocations}</h5>
                <p>{trip?.TripDuration}</p>

                <div className='Trip-data'>
                  <div className='trip-flight'>
                    <img src={Flight} alt="Flights" />
                    <p> {trip?.Flights} Flights </p>
                  </div>

                  <div className='trip-Hotels'>
                    <img src={Hotels} alt="Hotels" />
                    <p>{trip?.Hotels} Hotels</p>
                  </div>

                  <div className='trip-activities'>
                    <img src={Activities} alt="Activities" />
                    <p>{trip?.Activities} Activities</p>
                  </div>

                </div>

                <div className="trip-price">
                  <div className="trip-price-normal">
                    <div className="price-row">
                      <img src={Rupee16} alt="Normal Price" />
                      <p>{trip?.TripAmount}/-</p>
                    </div>
                    <span className="per-person">Per person</span>
                  </div>

                  <div className="trip-price-discount">
                    <div className="price-row">
                      <img src={Rupee24} alt="Discounted Price" />
                      <p>{trip?.TripDiscountAmount}/-</p>
                    </div>
                    <span className="per-person">Per person</span>
                  </div>
                </div>
                <button
                  className="button_01"
                  onClick={() => handleWhatsApp(trip?.CreatedBy?.Phonenumber)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>


    </div>


  );
}

export default PackagesCarousel;
