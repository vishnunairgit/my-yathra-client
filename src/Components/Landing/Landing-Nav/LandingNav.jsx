
// import React, { useEffect, useState } from 'react';
// import './landingnav.css';
// import logo from '../../Assets/my-yathra/logo.jpeg';
// import Call from '../../Assets/my-yathra/icons8-call-24.png';
// import HamburgerMenu from '../../Assets/my-yathra/icons8-hamburger-menu-24.png';
// import { useNavigate } from 'react-router-dom';
// import instagram from '../../Assets/my-yathra/icons8-instagram-35.png'
// import FaceBook from '../../Assets/my-yathra/icons8-facebook-35.png'
// import whatsapp from '../../Assets/my-yathra/icons8-whatsapp-35.png'
// import { GetTrips } from '../../../Api/Trips';
// import Loading from '../../Loading/Loading';
// import location from '../../Assets/my-yathra/icons8-location-35 (2).png'





// function LandingNav() {

//   const navigate = useNavigate();
//   const [allTrips, setAllTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errors, setErrors] = useState(null);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const tripData = await GetTrips();
//         setAllTrips(tripData);
//       } catch (error) {
//         setErrors(error);
//       }
//       finally {
//         setLoading(false);
//       }
//     }
//     fetchTrips();
//   }, [])
//   if (loading) {
//     return <Loading />;
//   }
//   // if (errors) {
//   //   return <div>Error: {errors.message || 'Something went wrong'}</div>;
//   // }

//   const handleFaceBook = () => {
//     const facebookUrl = allTrips[0]?.CreatedBy?.FaceBook;
//     if (facebookUrl) {
//       window.open(facebookUrl, '_blank');
//     } else {
//       console.error("Facebook URL not available");
//     }
//   };

//   const handleInstagram = () => {
//     const InstagramkUrl = allTrips[0]?.CreatedBy?.Instagram;
//     if (InstagramkUrl) {
//       window.open(InstagramkUrl, '_blank');
//     } else {
//       console.error("Facebook URL not available");
//     }
//   };

//   const handlelocation = () => {
//     window.open('https://maps.app.goo.gl/vadmQUGPhzJgrD916/', '_blank');
//   };

//   const handlewhatsapp = () => {
//     const phoneNumber = allTrips[0]?.CreatedBy?.Phonenumber;
//     if (phoneNumber) {
//       const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '');
//       const message = encodeURIComponent("Hello! I am contacting you regarding your trip.");
//       const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${message}`;
//       window.open(whatsappUrl, '_blank');
//     } else {
//       console.error("WhatsApp phone number not available");
//     }
//   };

  

//   const HandleEmployerLogin = () => {
//     navigate('/EmployerLogin')
//   }

//   const handelHome = () => {
//     navigate('/')
//   }

//   const handelAbout = () => {
//     navigate('/About')
//   }

//   const handelWhyUS = () => {
//     navigate('/WhyUs')
//   }
//   const handelBookNow = () => {
//     navigate('/BookNow')
//   }
//   const handleFacilities = () => {
//     navigate('/OtherFacilities')
//   }

//   const handleContact = () => {
//     navigate('/Contact')
//   }


//   return (
//     <div className='landing-nav'>
//       <div className='nav-LeftSide'>
//         <img src={logo} alt="Company Logo" className='company-logo' />
//         <div className='contact-info'>
//           <img src={Call} alt="Call Icon" className='call-icon' />
//           <p className='contact-number'><strong>+91 {allTrips[0]?.CreatedBy?.Phonenumber}</strong></p>
//         </div>
//       </div>

//       <div className='Social-media'>
//         <img src={location} alt="location" title='Location' onClick={handlelocation} />
//         <img src={whatsapp} alt="linkedin" title='whatsapp ' onClick={handlewhatsapp} />
//         <img src={instagram} alt="instagram" title='instagram' onClick={handleInstagram} />
//         <img src={FaceBook} alt="website" title='FaceBook' onClick={handleFaceBook} />
//       </div>


//       <div className="dropdown">
//         <button
//           className="btn"
//           type="button"
//           id="dropdownMenuButton1"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img src={HamburgerMenu} alt="Menu" className="menu-icon" />
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//           <li><span className="dropdown-item" onClick={handelHome} >Home</span></li>
//           <li><span className="dropdown-item" onClick={handelAbout} > About Us</span></li>
//           <li><span className="dropdown-item" onClick={handelWhyUS} >Why Us</span></li>
//           <li><span className="dropdown-item" onClick={handelBookNow}>Book Now</span></li>
//           <li><span className="dropdown-item" onClick={handleFacilities}>Other Facilities</span></li>
//           <li><span className="dropdown-item" onClick={handleContact}>Contact Us</span></li>
//           <li><span className="dropdown-item" onClick={HandleEmployerLogin} >Employer Login</span></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default LandingNav;





import React, { useEffect, useState } from 'react';
import './landingnav.css';
import logo from '../../Assets/my-yathra/logo.jpeg';
import Call from '../../Assets/my-yathra/icons8-call-24.png';
import HamburgerMenu from '../../Assets/my-yathra/icons8-hamburger-menu-24.png';
import { useNavigate } from 'react-router-dom';
import instagram from '../../Assets/my-yathra/icons8-instagram-35.png';
import FaceBook from '../../Assets/my-yathra/icons8-facebook-35.png';
import whatsapp from '../../Assets/my-yathra/icons8-whatsapp-35.png';
import { GetTrips } from '../../../Api/Trips';
import Loading from '../../Loading/Loading';
import location from '../../Assets/my-yathra/icons8-location-35 (2).png';

function LandingNav() {
  const navigate = useNavigate();
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await GetTrips();
        setAllTrips(tripData || []); // Ensure allTrips is always an array
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    console.error(errors);
    // Optionally display an error message to the user
  }

  // Utility function to safely access properties
  const getTripProperty = (key) => allTrips[0]?.CreatedBy?.[key] ?? null;

  const handleFaceBook = () => {
    const facebookUrl = getTripProperty('FaceBook');
    if (facebookUrl) {
      window.open(facebookUrl, '_blank');
    } else {
      console.warn("Facebook URL not available");
    }
  };

  const handleInstagram = () => {
    const instagramUrl = getTripProperty('Instagram');
    if (instagramUrl) {
      window.open(instagramUrl, '_blank');
    } else {
      console.warn("Instagram URL not available");
    }
  };

  const handleLocation = () => {
    window.open('https://maps.app.goo.gl/vadmQUGPhzJgrD916/', '_blank');
  };

  const handleWhatsApp = () => {
    const phoneNumber = getTripProperty('Phonenumber');
    if (phoneNumber) {
      const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '');
      const message = encodeURIComponent("Hello! I am contacting you regarding your trip.");
      const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.warn("WhatsApp phone number not available");
    }
  };

  const handleEmployerLogin = () => navigate('/EmployerLogin');
  const handleHome = () => navigate('/');
  const handleAbout = () => navigate('/About');
  const handleWhyUs = () => navigate('/WhyUs');
  const handleBookNow = () => navigate('/BookNow');
  const handleFacilities = () => navigate('/OtherFacilities');
  const handleContact = () => navigate('/Contact');

  return (
    <div className="landing-nav">
      <div className="nav-LeftSide">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <div className="contact-info">
          <img src={Call} alt="Call Icon" className="call-icon" />
          <p className="contact-number">
            <strong>+91 {getTripProperty('Phonenumber') || 'N/A'}</strong>
          </p>
        </div>
      </div>

      <div className="Social-media">
        <img src={location} alt="Location" title="Location" onClick={handleLocation} />
        <img src={whatsapp} alt="WhatsApp" title="WhatsApp" onClick={handleWhatsApp} />
        <img src={instagram} alt="Instagram" title="Instagram" onClick={handleInstagram} />
        <img src={FaceBook} alt="Facebook" title="Facebook" onClick={handleFaceBook} />
      </div>

      <div className="dropdown">
        <button
          className="btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={HamburgerMenu} alt="Menu" className="menu-icon" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><span className="dropdown-item" onClick={handleHome}>Home</span></li>
          <li><span className="dropdown-item" onClick={handleAbout}>About Us</span></li>
          <li><span className="dropdown-item" onClick={handleWhyUs}>Why Us</span></li>
          <li><span className="dropdown-item" onClick={handleBookNow}>Book Now</span></li>
          <li><span className="dropdown-item" onClick={handleFacilities}>Other Facilities</span></li>
          <li><span className="dropdown-item" onClick={handleContact}>Contact Us</span></li>
          <li><span className="dropdown-item" onClick={handleEmployerLogin}>Employer Login</span></li>
        </ul>
      </div>
    </div>
  );
}

export default LandingNav;
