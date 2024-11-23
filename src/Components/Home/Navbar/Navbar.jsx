// import React, { useEffect, useState } from 'react';
// import './navbar.css'
// import logo from '../../Assets/my-yathra/logo.jpeg';
// import notificationIcon from '../../Assets/icons8-notification-24.png';
// import user from '../../Assets/icons8-user-24.png';
// import { useNavigate } from 'react-router-dom';
// import { getAllNotification } from "../../../Api/Notifiation"
// import Loading from '../../Loading/Loading';

// function Navbar() {
//     const navigate = useNavigate()

//     const [notifications, setNotifications] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 const NotificationsData = await getAllNotification();
//                 setNotifications(NotificationsData)
//             } catch (error) {
//                 setError(error);
//             }
//             finally {
//                 setLoading(false);
//             }
//         }
//         fetchNotifications();
//     }, [])

//     if (loading) {
//         return <Loading />;
//     }

//     if (error) {
//         return <div>Error: {error.message || 'Something went wrong'}</div>;
//     }






//     const handlelogout = () => {
//         localStorage.clear()
//         navigate('/')
//     }

//     const handleHome = () => {
//         navigate('/Home')
//     }

//     const handleaddTrip = () => {
//         navigate('/AddTrips')
//     }

//     const handleAlljobs = () => {
//         navigate('./AllTrip')
//     }

//     const handleprofile = () => {
//         navigate('/ViewCompnay')
//     }

//     const handlecompany = () => {
//         navigate('/MyCompany')
//     }

//     return (
//         <div className="navbarHome">

//             <div className='nav-leftside'>
//                 <img src={logo} alt="" onClick={handleHome} />
//                 <div className="dropdown-trip">
//                     <button className="btn btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <span className='jobs'>TRIP</span>
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><span className="dropdown-item" onClick={handleaddTrip} >Add a Trip</span></li>
//                         <li><span className="dropdown-item" onClick={handleAlljobs} >List All Trips</span></li>
//                     </ul>
//                 </div>

//             </div>

//             <div className="nav-rightside">

//                 <div className="dropdown-noti">
//                     <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src={notificationIcon} alt="Notification Icon" />
//                         {/* Show notification count if there are any notifications */}
//                         {notifications.length > 0 && (
//                             <span className="notification-badge">{notifications.length}</span>
//                         )}
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         {loading ? (
//                             <li>Loading...</li>
//                         ) : error ? (
//                             <li>Error loading notifications</li>
//                         ) : notifications.length === 0 ? (
//                             <li>No Notifications</li>
//                         ) : (
//                             notifications.map((notification, index) => (
//                                 <li key={index} className="dropdown-item">
//                                     <span>{notification.title}</span>
//                                     <span>{notification.message}</span>
//                                 </li>
//                             ))
//                         )}
//                     </ul>
//                 </div>

//                 <div className="dropdown-user">
//                     <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src={user} alt="" />
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a className="dropdown-item" onClick={handleprofile}>Profile</a></li>
//                         <li><a className="dropdown-item" onClick={handlecompany}>My Company</a></li>
//                         <li><a className="dropdown-item" onClick={handlelogout}>logout</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar



import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../Assets/my-yathra/logo.jpeg';
import notificationIcon from '../../Assets/icons8-notification-24.png';
import user from '../../Assets/icons8-user-24.png';
import { useNavigate } from 'react-router-dom';
import { getAllNotification } from "../../../Api/Notification";
import Loading from '../../Loading/Loading';

function Navbar() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const notificationsData = await getAllNotification();
                setNotifications(notificationsData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchNotifications();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleNavigation = (path) => navigate(path);

    return (
        <div className="navbarHome">
            <div className="nav-leftside">
                <img src={logo} alt="Logo" onClick={() => handleNavigation('/Home')} />
                <div className="dropdown-trip">
                    <button
                        className="btn btn"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="jobs">TRIP</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <span className="dropdown-item" onClick={() => handleNavigation('/AddTrips')}>
                                Add a Trip
                            </span>
                        </li>
                        <li>
                            <span className="dropdown-item" onClick={() => handleNavigation('./AllTrip')}>
                                List All Trips
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="nav-rightside">
                <div className="dropdown-noti">
                    <button
                        className="btn btn"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img src={notificationIcon} alt="Notification Icon" />
                        {notifications.length > 0 && (
                            <span className="notification-badge">{notifications.length}</span>
                        )}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {error ? (
                            <li>Error: {error?.message || 'Something went wrong'}</li>
                        ) : notifications.length === 0 ? (
                            <li>No Notifications</li>
                        ) : (
                            notifications.map((notifications, index) => (
                                <li key={index} className="dropdown-item">
                                    <span>{notifications.title}</span>
                                    <span>{notifications.message}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>

                <div className="dropdown-user">
                    <button
                        className="btn btn"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img src={user} alt="User Icon" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li>
                            <a className="dropdown-item" onClick={() => handleNavigation('/ViewCompnay')}>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" onClick={() => handleNavigation('/MyCompany')}>
                                My Company
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" onClick={handleLogout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
