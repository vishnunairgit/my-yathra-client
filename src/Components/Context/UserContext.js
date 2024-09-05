// // UserContext.js or relevant context file
// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {

//     const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

//     const updateUserId = (newUserId) => {
//         setUserId(newUserId);
//         localStorage.setItem('userId', newUserId);
//     };

//     const logout = () => {
//         setUserId('');
//         localStorage.removeItem('userId');
//         // Clear any other relevant state or local storage data
//     };

//     return (
//         <UserContext.Provider value={{ userId, updateUserId, logout  }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

