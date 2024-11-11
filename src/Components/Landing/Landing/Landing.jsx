

import React from 'react';
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
import location from '../../Assets/my-yathra/icons8-location-24 (1).png'
import call from '../../Assets/my-yathra/icons8-call-24.png'
import Logo from '../../Assets/my-yathra/logo.jpeg'



function Landing() {

  const handleInstagram = () => {
    window.open('https://www.instagram.com/myyathra.in/?hl=en/', '_blank');
  }

  const handleFaceBook = () => {
    window.open('https://www.facebook.com/myyathra.in/', '_blank');
  }

  const handleLocation = () => {
    window.open('https://maps.app.goo.gl/vadmQUGPhzJgrD916/', '_blank');
  }

  const trips1 = [
    { id: 1, destination: 'Paris, France', image: 'https://example.com/paris.jpg', price: '$1200', duration: '7 Days', details: 'Explore the city of lights!', type: 'international' },
    { id: 2, destination: 'New York, USA', image: 'https://example.com/nyc.jpg', price: '$1500', duration: '5 Days', details: 'Experience the Big Apple.', type: 'international' },
    { id: 3, destination: 'Maldives', image: 'https://example.com/maldives.jpg', price: '$2000', duration: '6 Days', details: 'Relax in paradise.', type: 'international' },
    { id: 4, destination: 'Tokyo, Japan', image: 'https://example.com/tokyo.jpg', price: '$1800', duration: '8 Days', details: 'Discover the wonders', type: 'international' },
    { id: 5, destination: 'Goa, India', image: 'https://example.com/goa.jpg', price: '$500', duration: '5 Days', details: 'Relax on beautiful beaches.', type: 'international' },
    { id: 6, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'international' },
    { id: 7, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },
    { id: 8, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },
    { id: 9, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },
    { id: 10, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },
    { id: 11, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },
    { id: 12, destination: 'Kerala, India', image: 'https://example.com/kerala.jpg', price: '$600', duration: '6 Days', details: 'Experience the backwaters.', type: 'domestic' },

  ];

  // Filter domestic and international trips
  const domesticTrips = trips1.filter(trip => trip.type === 'domestic');
  const internationalTrips = trips1.filter(trip => trip.type === 'international');

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

      <div className='Trip-landing'>

        {/* <div className='CompanyMainImg'>
          <img src={companyimg} alt="Company" />
        </div> */}

        {/*  */}


        <div class="CompanyMainImg-container">
          <img src={companyimg} alt="Image Description" class="CompanyMainImg-image" />
          <div class="CompanyMainImg-overlay"></div>
          <div class="CompanyMainImg-text-1">Enjoy Your Vacation With Us</div>
          <div class="CompanyMainImg-text-2">I have found out that there ain't no surer way to find out whether you like people or hate them than to travel with them</div>

        </div>

        {/*  */}












        {/*  */}









        {/* Domestic Packages Carousel */}
        <div className="trips-details">
          <h3>Domestic Packages</h3>
          <Slider {...settings}>
            {domesticTrips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <img src={companyimg} alt={trip.destination} className="trip-image" />
                <div className="trip-details">
                  <h3>{trip.destination}</h3>
                  <p>{trip.details}</p>

                  <div className='Trip-data'>
                    <div className='trip-flight'>
                      <img src={Flight} alt="Flights" />
                      <p> 3 Flights </p>
                    </div>

                    <div className='trip-Hotels'>
                      <img src={Hotels} alt="Hotels" />
                      <p>4 Hotels</p>
                    </div>

                    <div className='trip-activities'>
                      <img src={Activities} alt="Activities" />
                      <p>3 activities</p>
                    </div>
                  </div>

                  <div className="trip-meta">
                    <div className="trip-price-normal">
                      <div className="price-row">
                        <img src={Rupee16} alt="Normal Price" />
                        <p>390000</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>

                    <div className="trip-price-discount">
                      <div className="price-row">
                        <img src={Rupee24} alt="Discounted Price" />
                        <p>350000</p>
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
          <h3>International Packages</h3>
          <Slider {...settings}>
            {internationalTrips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <img src={companyimg} alt={trip.destination} className="trip-image" />
                <div className="trip-details">
                  <h3>{trip.destination}</h3>
                  <p>{trip.details}</p>

                  <div className='Trip-data'>
                    <div className='trip-flight'>
                      <img src={Flight} alt="Flights" />
                      <p> 3 Flights </p>
                    </div>

                    <div className='trip-Hotels'>
                      <img src={Hotels} alt="Hotels" />
                      <p>4 Hotels</p>
                    </div>

                    <div className='trip-activities'>
                      <img src={Activities} alt="Activities" />
                      <p>3 activities</p>
                    </div>

                  </div>

                  <div className="trip-meta">
                    <div className="trip-price-normal">
                      <div className="price-row">
                        <img src={Rupee16} alt="Normal Price" />
                        <p>390000</p>
                      </div>
                      <span className="per-person">Per person</span>
                    </div>

                    <div className="trip-price-discount">
                      <div className="price-row">
                        <img src={Rupee24} alt="Discounted Price" />
                        <p>350000</p>
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


        <div className='aboutus-landing'>
          <h3>ABOUT US</h3>
          <div>
            {/* <p>{company?.About}</p> */}
            <p>About..........................</p>

          </div>
        </div>



        <div className='bottomlanding'>
          <div className='bottomlanding-1'>
            <div className='first'>
              <div className='companydetails'>
                fbfbfbf
                {/* {company?.Logo ? (
                                <img className="logo" src={`${BASE_URL}/UserFiles/${company?.Logo}`} />
                            ) : (<p>No logo available</p>
                            )} */}
                {/* <h5><strong>{company?.CompanyName} </strong></h5> */}
              </div>
              {/* <p>{company && company.About
                            ? company.About.length > 300
                                ? `${company.About.slice(0, 300)}...`
                                : company.About
                            : "Loading or no about text available"}
                        </p> */}
            </div>
            <div className='Second'>
              <h5><strong>Address :</strong> </h5>
              <div>MY YATHRA </div>
              <p>2 floor, JACOB'S DD MALL, Mahatma Gandhi Rd, opposite CENTRAL SQUARE MALL, Shenoys, Kochi, Ernakulam, Kerala 682035</p>
            </div>
            <div className='Third'>
              <h5><strong>Contact :</strong></h5>
              <div>
                <div>9756000700</div>
                <div>ingo@hhdhhhdhhfh</div>
              </div>
            </div>
          </div>


          <div className='bottomlanding-2'>
            <img src={instagram} alt="linkedin" title='linkedin' onClick={handleInstagram} />
            <img src={FaceBook} alt="website" title='website' onClick={handleFaceBook} />
          </div>


        </div>

      </div>


    </div>
  );
}

export default Landing;
