
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
    const [unopenedCount, setUnopenedCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const NotificationsData = await getAllNotification();
                if (NotificationsData.notifications) {
                    const validNotifications = NotificationsData.notifications.filter(notification => {
                        const twoDaysAgo = new Date();
                        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
                        return new Date(notification.Date) >= twoDaysAgo;
                    });

                    // Retrieve opened notifications from local storage
                    const openedNotifications = JSON.parse(localStorage.getItem('openedNotifications')) || [];
                    
                    const formattedNotifications = validNotifications.map(notification => ({
                        ...notification,
                        isOpened: openedNotifications.includes(notification._id), // Check if notification is already opened
                    }));

                    setNotifications(formattedNotifications);

                    // Calculate unopened count
                    const count = formattedNotifications.filter(notification => !notification.isOpened).length;
                    setUnopenedCount(count);
                } else {
                    setNotifications([]);
                    setUnopenedCount(0);
                }
            } catch (error) {
                console.error("Error fetching notifications:", error);
            
            } finally {
                setLoading(false);
            }
        };
        fetchNotifications();
    }, []);

    const handleNotificationClick = (id) => {
        setNotifications(notifications.map(notification =>
            notification._id === id && !notification.isOpened
                ? { ...notification, isOpened: true }
                : notification
        ));

        // Reduce the unopened count only if the notification was not already opened
        setUnopenedCount(prevCount => prevCount - 1);

        // Save the opened notification ID to local storage
        const openedNotifications = JSON.parse(localStorage.getItem('openedNotifications')) || [];
        if (!openedNotifications.includes(id)) {
            openedNotifications.push(id);
            localStorage.setItem('openedNotifications', JSON.stringify(openedNotifications));
        }
    };

    if (loading) {
        return <Loading />;
    }

   

    return (
        <div className="navbarHome">
            <div className="nav-leftside">
                <img src={logo} alt="" onClick={() => navigate('/Home')} />
                <div className="dropdown-trip">
                    <button className="btn btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className='jobs'>TRIP</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><span className="dropdown-item" onClick={() => navigate('/AddTrips')}>Add a Trip</span></li>
                        <li><span className="dropdown-item" onClick={() => navigate('./AllTrip')}>List All Trips</span></li>
                        <li><span className="dropdown-item" onClick={() => navigate('./UploadTripImages')}>Upload Images</span></li>
                    </ul>
                </div>
               
            </div>

            <div className="nav-rightside">

                <div className="dropdown-noti">
                    <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={notificationIcon} alt="Notification Icon" />
                        {unopenedCount > 0 && (
                            <span className="notification-badge">{unopenedCount}</span>
                        )}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {notifications.length === 0 ? (
                            <li>No Notifications</li>
                        ) : (
                            notifications.map((notification, index) => (
                                <li
                                    key={index}
                                    className={`dropdown-item ${notification.isOpened ? 'notification-opened' : 'notification-unopened'}`}
                                    onClick={() => handleNotificationClick(notification._id)}
                                >
                                    <span className="notification-title">{notification.title}</span>
                                    <span className="notification-message">{notification.message}</span>
                                    <span className="notification-date">{new Date(notification.Date).toLocaleDateString()}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>

                <div className="dropdown-user">
                    <button className="btn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user} alt="" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><div className="dropdown-item" onClick={() => navigate('/ViewCompnay')}>Profile</div></li>
                        <li><div className="dropdown-item" onClick={() => navigate('/MyCompany')}>My Company</div></li>
                        <li><div className="dropdown-item" onClick={() => navigate('/Notifications')}>Booking History</div></li>

                        <li><div className="dropdown-item" onClick={() => {
                            localStorage.clear();
                            navigate('/');
                        }}>logout</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
