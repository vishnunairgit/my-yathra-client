
// import { formatDateForInput } from '../../../Helpers/Helpers';
// import React, { useEffect, useState } from 'react';
// import { Getuser, updateUser } from '../../../Api/User';
// // import '../UserView/user.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import loadingGif from '../../../Components/Assets/loading...gif';


// function UserEdit() {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [userData, setUserData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [errors, setErrors] = useState({});

//     const [userFiles, setUserFiles] = useState({
//         logoFile: '',
//         imageFile: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const userData = await Getuser(userId);
//                 setUser(userData);
//                 setUserData(userData);
//                 setLoading(false);
//             } catch (error) {
//                 setErrors({ fetch: error.message });
//                 setLoading(false);
//             }
//         };
//         if (userId) {
//             fetchUser();
//         } else {
//             console.warn('No userId found');
//         }
//     }, [userId]);

//     if (loading) {
//         return (
//             <div className="spinner-container">
//                 <img src={loadingGif} alt="Loading..." className="spinner" />
//             </div>
//         );
//     };

//     if (errors.fetch) {
//         return <div>Error: {errors.fetch}</div>;
//     }

//     const handleUserChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value });
//     };

//     // File management
//     const editUserFile = (e) => {
//         const file = e.target.files[0];
//         const fileName = e.target.name;
//         setUserFiles({ ...userFiles, [fileName]: file });
//     };

//     const handleEditSave = async (e) => {
//         e.preventDefault();

//         try {
//             const formData = new FormData();
//             for (const key in userData) {
//                 formData.append(key, userData[key]);
//             }
//             if (userFiles.logoFile) {
//                 formData.append('logoFile', userFiles.logoFile);
//             }
//             if (userFiles.imageFile) {
//                 formData.append('imageFile', userFiles.imageFile);
//             }

//             await updateUser(userId, formData);
//             alert('User updated successfully!');
//             navigate('/UserView');
//         } catch (error) {
//             console.error("Error updating user:", error);
//             setErrors(error);
//         }
//     };

//     const updatePassword = () => {
//         navigate(`/UserEdit/${userId}/UpdatePassword`);
//     };

//     const handleBack = () => {
//         navigate('/UserView');
//     };


//     return (
//         <div className="User">
//             <h3>EDIT USER</h3>
//             <form onSubmit={handleEditSave}>
//                 <div className="container">
//                     <div className="leftSide-container">

//                         {/* User Name */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="UserName">
//                                     USER NAME <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="UserName"
//                                     placeholder="UserName..."
//                                     onChange={handleUserChange}
//                                     value={userData.UserName || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Company Name */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="CompanyName">
//                                     COMPANY NAME <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="CompanyName"
//                                     placeholder="CompanyName..."
//                                     onChange={handleUserChange}
//                                     value={userData.CompanyName || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Registration Number */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="RegistrationNumber">
//                                     REGISTRATION NUMBER <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="RegistrationNumber"
//                                     placeholder="RegistrationNumber..."
//                                     readOnly
//                                     value={userData.RegistrationNumber || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Email">
//                                     EMAIL ID <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="Email"
//                                     placeholder="Email..."
//                                     value={userData.Email || ''}
//                                     readOnly
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Phone Number */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Phonenumber">
//                                     PHONE NUMBER <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="Phonenumber"
//                                     placeholder="Phonenumber..."
//                                     onChange={handleUserChange}
//                                     value={userData.Phonenumber || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Address */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Address">
//                                     ADDRESS <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="Address"
//                                     placeholder="Address..."
//                                     onChange={handleUserChange}
//                                     value={userData.Address || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Website */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Website">
//                                     WEBSITE <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="Website"
//                                     placeholder="Website..."
//                                     onChange={handleUserChange}
//                                     value={userData.Website || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* LinkedIn */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="LinkedIn">
//                                     LINKEDLN ID <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="LinkedIn"
//                                     placeholder="LinkedIn Id..."
//                                     onChange={handleUserChange}
//                                     value={userData.LinkedIn || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Incorporation Date */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Incorporationdate">
//                                     INCORPORATION DATE <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="date"
//                                     name="Incorporationdate"
//                                     placeholder="Incorporationdate..."
//                                     onChange={handleUserChange}
//                                     value={formatDateForInput(userData.Incorporationdate) || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Industry */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="Industry">
//                                     TYPE OF INDUSTRY <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="Industry"
//                                     placeholder="Industry..."
//                                     onChange={handleUserChange}
//                                     value={userData.Industry || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* About Us */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="About">
//                                     ABOUT US <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="About"
//                                     placeholder="About..."
//                                     onChange={handleUserChange}
//                                     value={userData.About || ''}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="about">UPLOAD LOGO</label>
//                             </div>

//                             <div className="col-75">
//                                 <input
//                                     type="file"
//                                     name="logoFile"
//                                     accept="image/*"
//                                     onChange={editUserFile}

//                                 />
//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="about">UPLOAD IMAGE</label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="file"
//                                     name="imageFile"
//                                     accept="image/*"
//                                     onChange={editUserFile}
//                                 />
//                             </div>
//                         </div>

//                         <div className='file-view'>
//                             {userFiles?.logoFile && (
//                                 <img
//                                     src={URL.createObjectURL(userFiles.logoFile)}
//                                     alt="Logo"
//                                     style={{ width: "100px", height: "100px" }}
//                                 />
//                             )}
//                             {userFiles?.imageFile && (
//                                 <img
//                                     src={URL.createObjectURL(userFiles.imageFile)}
//                                     alt="Image"
//                                     style={{ width: "100px", height: "100px" }}
//                                 />
//                             )}

//                         </div>

//                         <div className="row">
//                             <div className="col-25">
//                                 <button type="button" className='button_03' onClick={updatePassword} >Update Password</button>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//                 <div className="buttonHolder">
//                     <button className="button_02" type="button" onClick={handleBack}>
//                         Back
//                     </button>

//                     <button className="button_01" type="submit" >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default UserEdit;
