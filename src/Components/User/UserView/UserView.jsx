import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Getuser } from '../../../Api/User';
import './user.css'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../Constants/BaseUrl';
import { formatDateForInput } from '../../../Helpers/Helpers';
import loadingGif from '../../../Components/Assets/loading...gif';
import Loading from '../../Loading/Loading';



function UserView() {
  const userId = useSelector(state => state.user.userDetails.userId);
  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(true);
  const [errors, seterrors] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchuser = async () => {
      // debugger
      try {
        const userData = await Getuser(userId);
        setuser(userData);
        setloading(false)
      } catch (error) {
        seterrors(error)
        setloading(false)
      }
    }
    if (userId) {
      fetchuser();
    } else {
      console.warn('No userId found');
    }
  }, [userId])

  if (loading) {
    return <Loading />;
}

  if (errors) {
    return <div>Error: {errors.message || 'Something went wrong'}</div>;
  }

  const handleEdit = () => {
    navigate(`/UserEdit/${userId}`);
  }

  const handleback = () => {
    navigate('/Home')
  }



  return (


    <div className="User">
      <h3>USER DATA</h3>
      <form >
        <div className="container">
          <div className="leftSide-container">

            {/* User Name */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="UserName">
                  USER NAME <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="UserName"
                  placeholder="UserName..."
                  value={user.UserName}
                  readOnly
                  required
                />
              </div>
            </div>

            {/* COMPANY NAME */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="CompanyName">
                  COMPANY NAME <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="CompanyName"
                  name="CompanyName"
                  placeholder="CompanyName..."
                  readOnly
                  value={user.CompanyName}
                  required
                />
              </div>
            </div>

            {/*REGISTRATION NUMBER  */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="RegistrationNumber">
                  REGISTRATION NUMBER <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="RegistrationNumber"
                  name="RegistrationNumber"
                  placeholder="RegistrationNumber..."
                  value={user.RegistrationNumber}
                  readOnly
                  required
                />
              </div>
            </div>

            {/*  EMAIL ID */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="Email">
                  EMAIL ID <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email..."
                  value={user.Email}
                  readOnly
                  required
                />
              </div>
            </div>

            {/* PHONE NUMBER */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="JobTitle">
                  PHONE NUMBER <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="JobTitle"
                  placeholder="Phonenumber..."
                  value={user.Phonenumber}
                  readOnly
                  required
                />
              </div>
            </div>

            {/*ADDRESS  */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="JobTitle">
                  ADDRESS <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Address..."
                  readOnly
                  value={user?.Address}
                  required
                />
              </div>
            </div>

            {/* WEBSITE */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="Website">
                  WEBSITE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Website"
                  name="Website"
                  placeholder="Website..."
                  readOnly
                  value={user?.Website}
                  required
                />
              </div>
            </div>

            {/* LINKEDLN ID */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="LinkedIn">
                  LINKEDLN ID <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="LinkedIn"
                  name="LinkedIn"
                  placeholder="LinkedIn Id..."
                  readOnly
                  value={user?.LinkedIn}
                  required
                />
              </div>
            </div>

            {/* INCORPORATION DATE */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="Incorporationdate">
                  INCORPORATION DATE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="Incorporationdate"
                  placeholder="Incorporationdate..."
                  value={formatDateForInput(user.Incorporationdate)}
                  readOnly
                  required
                />
              </div>
            </div>

            {/*  TYPE OF INDUSTRY */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="Industry">
                  TYPE OF INDUSTRY <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Industry"
                  name="Industry"
                  placeholder="Industry..."
                  value={user?.Industry}
                  readOnly
                  required
                />
              </div>
            </div>

            {/* ABOUT US */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="About">
                  ABOUT US<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="About"
                  name="About"
                  placeholder="About..."
                  readOnly
                  value={user?.About}
                  required
                />
              </div>
            </div>

            <div className='files'>
              <div>
                <h3>Logo</h3>
                {user.Logo ? (
                  <img className="logo" src={`${BASE_URL}/UserFiles/${user?.Logo}`}  />
                ) : (
                  <p>No logo available</p>
                )}
              </div>
              <div>
                <h3>Image</h3>
                {user?.Image ? (

                  <img className="image" src={`${BASE_URL}/UserFiles/${user?.Image}`} alt="Image" />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>


          </div>
        </div>

        <div className="buttonHolder">
          <button className="button_01" type="button" onClick={handleback}>
            Back
          </button>

          <button className="button_03" type="reset" onClick={handleEdit}>
            Edit
          </button>

          {/* <button className="button_02" type="submit">
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default UserView
