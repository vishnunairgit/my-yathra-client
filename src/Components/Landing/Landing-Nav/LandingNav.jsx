
import React from 'react';
import './landingnav.css';
import logo from '../../Assets/my-yathra/logo.jpeg';
import Call from '../../Assets/my-yathra/icons8-call-24 (1).png';
import HamburgerMenu from '../../Assets/my-yathra/icons8-hamburger-menu-24.png';
import { useNavigate } from 'react-router-dom';

function LandingNav() {


  const navigate = useNavigate();


  const HandleEmployerLogin = () => {
    navigate('/EmployerLogin')
  }

  const handelHome = () => {
    navigate('/')
  }

  const handelAbout = () => {
    navigate('/About')
  }

  const handelWhyUS = () =>{
    navigate('/WhyUs')
  }
  const handelBookNow = () =>{
navigate('/BookNow')
  }
  const  handleFacilities = ()=>{
navigate('/OtherFacilities')
  }

  const handleContact  =()=>{
    navigate('/Contact')
  }


  return (
    <div className='landing-nav'>
      <div className='nav-LeftSide'>
        <img src={logo} alt="Company Logo" className='company-logo' />
        <div className='contact-info'>
          <img src={Call} alt="Call Icon" className='call-icon' />
          <p className='contact-number'> <strong>+91 9539 771 777</strong></p>
        </div>
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
          <li><span className="dropdown-item" onClick={handelHome} >Home</span></li>
          <li><span className="dropdown-item" onClick={handelAbout} > About Us</span></li>
          <li><span className="dropdown-item" onClick={handelWhyUS} >Why Us</span></li>
          <li><span className="dropdown-item" onClick={handelBookNow}>Book Now</span></li>
          <li><span className="dropdown-item" onClick={handleFacilities}>Other Facilities</span></li>
          <li><span className="dropdown-item" onClick={handleContact}>Contact Us</span></li>
          <li><span className="dropdown-item" onClick={HandleEmployerLogin} >Employer Login</span></li>
        </ul>
      </div>
    </div>
  );
}

export default LandingNav;
