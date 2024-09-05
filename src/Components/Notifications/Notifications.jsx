


// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const Notifications = () => {
//   const [socket, setSocket] = useState(null);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const socket = io('http://localhost:8002', {
//       transports: ['websocket'],
//     });
  
//     socket.on('connect', () => {
//       console.log('Connected to WebSocket');
//     });
  
//     socket.on('test_event', (data) => {
//       console.log('Received:', data.message);
//     });
  
//     socket.on('disconnect', () => {
//       console.log('Disconnected from WebSocket');
//     });
  
//     return () => {
//       socket.disconnect();
//     };
//   }, []);
  

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {notifications.length === 0 && <p>No notifications</p>}
//       {notifications.map((notification, index) => (
//         <div key={index}>{notification}</div>
//       ))}
//     </div>
//   );
// };

// export default Notifications;

import React from 'react'

function Notifications() {
  return (
    <div>Notifications</div>
  )
}

export default Notifications