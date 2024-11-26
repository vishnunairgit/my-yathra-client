// import React from 'react'
// import { AddTripImages } from '../../Api/UploadImages'

// function UploadTripImages() {



//     return (

//         <div className='Trip'>
//             <h3>Add A TRIP</h3>

//             <form onSubmit={handleTrip} >

//                 <div className='container'>
//                     <div className='Tripcontainer'>

//                         {/*Trip Titel  */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="TripTitle">
//                                     TRIP TITLE <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="TripTitle"
//                                     placeholder="Trip Title..."
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/*Trip Titel  */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="TripTitle">
//                                     TRIP TITLE <span className="mandatory-indicator">*</span>
//                                 </label>
//                             </div>
//                             <div className="col-75">
//                                 <input
//                                     type="text"
//                                     name="TripTitle"
//                                     placeholder="Trip Title..."
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* upload Images */}
//                         <div className="row">
//                             <div className="col-25">
//                                 <label htmlFor="about">UPLOAD IMAGE</label>
//                             </div>

//                             <div className="col-75">
//                                 <input
//                                     type="file"
//                                     name="TripFile"
//                                     accept="image/*"
//                                     onChange={uploadCompanyFile}

//                                 />
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//                 <div className="buttonHolder">
//                     <button className="button_03" type="button">
//                         Back
//                     </button>

//                     <button className="button_02" type="reset">
//                         Reset
//                     </button>

//                     <button className="button_01" type="submit">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// };


// export default UploadTripImages



// import React, { useState } from 'react';
// import { AddTripImages } from '../../Api/UploadImages';

// function UploadTripImages() {
//   const [formData, setFormData] = useState({
//     TripTitle: '',
//     TripFile: null,
//   });

//   // Handle input change for text fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file input change
//   const uploadCompanyFile = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({
//       ...prev,
//       TripFile: file,
//     }));
//   };

//   // Handle form submission
//   const handleTrip = async (e) => {
//     e.preventDefault();

//     if (!formData.TripTitle || !formData.TripFile) {
//       alert('Please fill out all required fields and upload an image.');
//       return;
//     }

//     const tripData = new FormData();
//     tripData.append('TripTitle', formData.TripTitle);
//     tripData.append('TripFile', formData.TripFile);

//     try {
//       const response = await AddTripImages(tripData);
//       if (response.status === 200) {
//         alert('Trip added successfully!');
//         setFormData({ TripTitle: '', TripFile: null });
//       } else {
//         alert('Failed to upload trip. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error uploading trip:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="Trip">
//       <h3>Add A Trip</h3>

//       <form onSubmit={handleTrip}>
//         <div className="container">
//           <div className="Tripcontainer">
//             {/* Image Title */}
//             <div className="row">
//               <div className="col-25">
//                 <label htmlFor="ImageTitle">
//                   Image Title <span className="mandatory-indicator">*</span>
//                 </label>
//               </div>
//               <div className="col-75">
//                 <input
//                   type="text"
//                   name="ImageTitle"
//                   placeholder="Enter ImageTitle..."
//                   value={formData.ImageTitle}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Trip Title */}
//             <div className="row">
//               <div className="col-25">
//                 <label htmlFor="ImageDescription">
//                 image description <span className="mandatory-indicator">*</span>
//                 </label>
//               </div>
//               <div className="col-75">
//                 <input
//                   type="text"
//                   name="ImageDescription"
//                   placeholder="Enter image description..."
//                   value={formData.ImageDescription}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Upload Image */}
//             <div className="row">
//               <div className="col-25">
//                 <label htmlFor="TripFile">Upload Image</label>
//               </div>
//               <div className="col-75">
//                 <input
//                   type="file"
//                   name="TripFile"
//                   accept="image/*"
//                   onChange={uploadCompanyFile}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="buttonHolder">
//           <button
//             className="button_03"
//             type="button"
//             onClick={() => alert('Going back!')} // Update with actual navigation logic
//           >
//             Back
//           </button>

//           <button className="button_02" type="reset" onClick={() => setFormData({ TripTitle: '', TripFile: null })}>
//             Reset
//           </button>

//           <button className="button_01" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default UploadTripImages;





import React, { useState } from 'react';
import { AddTripImages } from '../../Api/UploadImages';
import { useNavigate } from 'react-router-dom';

function UploadTripImages() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    TripTitle: '',
    ImageTitle: '',
    ImageDescription: '',
    TripFile: null,
  });

  const uploadCompanyFile = (e) => {
    const file = e.target.files[0];
    setCompanyFiles({ TripFile: file });
  };

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const uploadCompanyFile = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      TripFile: file,
    }));
  };

  // Handle form submission
  const handleTrip = async (e) => {
    e.preventDefault();

    if (!formData.TripTitle || !formData.ImageTitle || !formData.ImageDescription || !formData.TripFile) {
      alert('Please fill out all required fields and upload an image.');
      return;
    }

    const tripData = new FormData();
    tripData.append('TripTitle', formData.TripTitle);
    tripData.append('ImageTitle', formData.ImageTitle);
    tripData.append('ImageDescription', formData.ImageDescription);
    tripData.append('TripFile', formData.TripFile);

    try {
      const response = await AddTripImages(tripData);
      if (response.status === 200) {
        alert('Trip added successfully!');
        setFormData({
          TripTitle: '',
          ImageTitle: '',
          ImageDescription: '',
          TripFile: null,
        });
      } else {
        alert('Failed to upload trip. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading trip:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="Trip">
      <h3>Add A Trip</h3>

      <form onSubmit={handleTrip}>
        <div className="container">
          <div className="Tripcontainer">
            {/* Image Title */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="ImageTitle">
                  Image Title <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="ImageTitle"
                  placeholder="Enter Image Title..."
                  value={formData.ImageTitle}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Image Description */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="ImageDescription">
                  Image Description <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="ImageDescription"
                  placeholder="Enter Image Description..."
                  value={formData.ImageDescription}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Upload Image */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="TripFile">Upload Image</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  name="TripFile"
                  accept="image/*"
                  onChange={uploadCompanyFile}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttonHolder">
          <button
            className="button_03"
            type="button"
            onClick={() => navigate(-1)} // Navigate back
          >
            Back
          </button>

          <button
            className="button_02"
            type="reset"
            onClick={() =>
              setFormData({
                TripTitle: '',
                ImageTitle: '',
                ImageDescription: '',
                TripFile: null,
              })
            }
          >
            Reset
          </button>

          <button className="button_01" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadTripImages;
