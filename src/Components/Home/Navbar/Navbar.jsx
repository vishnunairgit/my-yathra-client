import React, { useEffect, useState } from 'react';
import './navbar.css'
import logo from '../../Assets/my-yathra/logo.jpeg';
import notificationIcon from '../../Assets/icons8-notification-24.png';
import user from '../../Assets/icons8-user-24.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()
    

    const handlelogout = () => {
        localStorage.clear()
        navigate('/')
    }

    const handleHome = () => {
        navigate('/Home')
    }

    const handleaddjOb = () => {
        navigate('/AddTrips')
    }

    const handleAlljobs = () => {
        navigate('./Alljobs')
    }

    const handleprofile = () => {
        navigate('/UserView')
    }

    const handlecompany = () => {
        navigate('/Mycompany')
    }

    return (
        <div className="navbarHome">

            <div className='nav-leftside'>

                <img src={logo} alt="" onClick={handleHome} />
                <div className="dropdown-jobs">
                    <button className="btn btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className='jobs'>TRIP</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><span className="dropdown-item" onClick={handleaddjOb} >Add a Trip</span></li>
                        <li><span className="dropdown-item" onClick={handleAlljobs} >List All Trips</span></li>
                    </ul>
                </div>

            </div>

            <div className="nav-rightside">

                <div className="dropdown-noti">
                    <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={notificationIcon} alt="Notification Icon" />
                        {/* {Notification.length > 0 && (
                            <span className="notification-badge visible">{Notification.length}</span>
                        )} */}
                    </button>
                    {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {loading ? (
                            <li className="loading-spinner"><Loading /></li>
                        ) : error ? (
                            <li><span className="dropdown-item">Error: {error.message}</span></li>
                        ) : Notification.length === 0 ? (
                            <li><span className="dropdown-item">No Notifications</span></li>
                        ) : (
                            Notification.map((notification, index) => (
                                <li key={index} className="dropdown-item">
                                    <span>{notification.title}</span>
                                    <span>{notification.message}</span>
                                </li>
                            ))
                        )}
                    </ul> */}
                </div>

                <div className="dropdown-user">
                    <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user} alt="" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={handleprofile}>Profile</a></li>
                        <li><a className="dropdown-item" onClick={handlecompany}>My Company</a></li>
                        <li><a className="dropdown-item" onClick={handlelogout}>logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar