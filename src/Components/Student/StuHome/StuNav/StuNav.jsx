import React, { useEffect, useState } from 'react';
import logo from '../../../Assets/net.america.png';
import notificationIcon from '../../../Assets/icons8-notification-24.png';
import userIcon from '../../../Assets/icons8-user-24.png';
import { useNavigate } from 'react-router-dom';
import { getAllNotification } from '../../../../Api/Notifiation';
import Loading from '../../../Loading/Loading';

function StuNav() {

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchnotification = async () => {
            try {
                const response = await getAllNotification()
                setNotifications(response.notifications)
            } catch (error) {
                setError(error)
            }finally {
                setLoading(false);
            }
        };
        fetchnotification()
    }, [])
    

    const handleHomeClick = () => {
        navigate('/StuHome')
    }

    return (
        <div className="navbarHome">
            <div className="nav-leftside">
                <img src={logo} alt="Net America" onClick={handleHomeClick} />
            </div>
            <div className="nav-rightside">
                <div className="dropdown-noti">
                    <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={notificationIcon} alt="Notification Icon" />
                        {notifications.length > 0 && (
                            <span className="notification-badge">{notifications.length}</span>
                        )}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {loading ? (
                            <li className="loading-spinner"><Loading /></li>
                        ) : error ? (
                            <li><span className="dropdown-item">Error: {error.message}</span></li>
                        ) : notifications.length === 0 ? (
                            <li><span className="dropdown-item">No Notifications</span></li>
                        ) : (
                            notifications.map((notification, index) => (
                                <li key={index} className="dropdown-item">
                                    <span>{notification.title}</span>
                                    <span>{notification.message}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="dropdown-user">
                    <button className="btn " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userIcon} alt="User Icon" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Applied Jobs</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StuNav


