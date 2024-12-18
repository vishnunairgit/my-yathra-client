
import React, { useEffect, useState } from 'react';
import LandingNav from '../Landing-Nav/LandingNav';
import './landing.css';
import companyimg from '../../Assets/my-yathra/company-img.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import instagram from '../../Assets/my-yathra/icons8-instagram-35.png'
import FaceBook from '../../Assets/my-yathra/icons8-facebook-35.png'
import logo from '../../Assets/my-yathra/logo.jpeg';
import whatsapp from '../../Assets/my-yathra/icons8-whatsapp-35.png'
import location from '../../Assets/my-yathra/icons8-location-35 (2).png'
import { GetTrips } from '../../../Api/Trips';
import Loading from '../../Loading/Loading';
import InquiryBooking from '../Inquiry-book/InquiryBooking';
import { useNavigate } from 'react-router-dom';
import PackagesCarousel from '../PackagesCarousel/PackagesCarousel';



function Landing() {
  
  const navigate = useNavigate();
  const [allTrips, setAllTrips] = useState([]);
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [internationalTrips, setInternationalTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  // Instagram
  const handleInstagram = () => {
    const InstagramkUrl = allTrips[0]?.CreatedBy?.Instagram;
    if (InstagramkUrl) {
      window.open(InstagramkUrl, '_blank');
    } else {
      console.error("Facebook URL not available");
    }
  };

  // FaceBook
  const handleFaceBook = () => {
    const facebookUrl = allTrips[0]?.CreatedBy?.FaceBook;
    if (facebookUrl) {
      window.open(facebookUrl, '_blank');
    } else {
      console.error("Facebook URL not available");
    }
  };

  // whatsapp
  const handlewhatsapp = () => {
    const phoneNumber = allTrips[0]?.CreatedBy?.Phonenumber;
    if (phoneNumber) {
      const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '');
      const message = encodeURIComponent("Hello! I am contacting you regarding your trip.");
      const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.error("WhatsApp phone number not available");
    }
  };

  // Location
  const handlelocation = () => {
    window.open('https://maps.app.goo.gl/vadmQUGPhzJgrD916/', '_blank');
  }


  // trip details
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await GetTrips();
        setAllTrips(tripData);
        const domestic = tripData?.filter(trip => trip?.TripType === 'domestic');
        const international = tripData?.filter(trip => trip?.TripType === 'international');
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

        {/* Pass trips data to PackagesCarousel */}
        <PackagesCarousel
          domesticTrips={domesticTrips}
          internationalTrips={internationalTrips}
        />

        {/* Trip carousal and inquiry */}
        <InquiryBooking />

        {/* about us */}
        <div className='aboutus-landing'>
          <h3>ABOUT US</h3>
          <div>{allTrips[0]?.CreatedBy?.About}</div>
        </div>

        {/* bottom nav */}
        <div className='bottomlanding'>
          <div className='bottomlanding-1'>
            <div className='first'>
              <div className='companydetails'>
                <img src={logo} alt="" />
                <h5><strong> {allTrips[0]?.CreatedBy?.CompanyName}</strong></h5>
              </div>
            </div>
            <div className='Second'>
              <h5><strong>Address :</strong> </h5>
              <h4><strong>{allTrips[0]?.CreatedBy?.CompanyName}</strong></h4>
              <div>{allTrips[0]?.CreatedBy?.Address}</div>
            </div>


            <div className='Third'>
              <h5><strong>Contact :</strong></h5>
              <div>
                <div>{allTrips[0]?.CreatedBy?.Phonenumber}</div>
                <div>{allTrips[0]?.CreatedBy?.Email}</div>
              </div>
            </div>
          </div>

          <div className='bottomlanding-2'>
            <img src={location} alt="location" title='Location' onClick={handlelocation} />
            <img src={whatsapp} alt="linkedin" title='whatsapp ' onClick={handlewhatsapp} />
            <img src={instagram} alt="linkedin" title='instagram' onClick={handleInstagram} />
            <img src={FaceBook} alt="website" title='FaceBook' onClick={handleFaceBook} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Landing;
