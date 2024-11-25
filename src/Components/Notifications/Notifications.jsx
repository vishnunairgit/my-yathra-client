


// import React, { useState, useEffect } from 'react';
// import { getAllNotification } from "../../../src/Api/Notification";
// import Loading from "../../Components/Loading/Loading"; // Assuming you have a Loading component

// function Notifications() {
//   const [notifications, setNotifications] = useState([]); // To store notifications
//   const [loading, setLoading] = useState(true); // To handle the loading state
//   const [error, setError] = useState(null); // To handle any errors

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const NotificationsData = await getAllNotification();
//         // Extract the notifications array from the response
//         if (NotificationsData.notifications) {
//           setNotifications(NotificationsData.notifications);
//         } else {
//           setNotifications([]); // Default to an empty array if no notifications
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNotifications();
//   }, []);

//   if (loading) {
//     return <Loading />; // Show the loading spinner
//   }

//   if (error) {
//     return <div>Error: {error.message || 'Something went wrong'}</div>;
//   }

//   return (
//     <div>
//       <h1>Notifications</h1>
//       {notifications.length > 0 ? (
//         <ul>
//           {notifications.map((notification, index) => (
//             <li key={index}>
//               <h3>{notification.title || 'No Title'}</h3>
//               <p>{notification.message || 'No message available'}</p>
//               <span>{notification.date || 'No date available'}</span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No notifications available</p>
//       )}
//     </div>
//   );
// }

// export default Notifications;


import React, { useState, useEffect } from 'react';
import { getAllNotification } from "../../../src/Api/Notification";
import Loading from "../../Components/Loading/Loading"; // Assuming you have a Loading component

import "./Notifications.css"; // Importing CSS for styling

function Notifications() {
  const [notifications, setNotifications] = useState([]); // To store notifications
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [error, setError] = useState(null); // To handle any errors

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const NotificationsData = await getAllNotification();
        if (NotificationsData.notifications) {
          setNotifications(NotificationsData.notifications);
        } else {
          setNotifications([]); // Default to an empty array if no notifications
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">Error: {error.message || 'Something went wrong'}</div>;
  }

  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notifications</h1>
      {notifications.length > 0 ? (
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <h3 className="notification-title">{notification.title || 'No Title'}</h3>
              <p className="notification-message">{notification.message || 'No message available'}</p>
              <span className="notification-date">{new Date(notification.Date).toLocaleDateString()}</span>
              </li>
          ))}
        </ul>
      ) : (
        <p className="no-notifications">No notifications available</p>
      )}
    </div>
  );
}

export default Notifications;
