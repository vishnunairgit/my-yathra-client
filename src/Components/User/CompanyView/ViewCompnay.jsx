import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './viewcompany.css'
import { GetMycompany } from '../../../Api/MyCompany'
import Loading from '../../Loading/Loading';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../../Constants/BaseUrl';


function ViewCompnay() {

    const userId = useSelector(state => state.user.userDetails.userId);
    const [mycompany, setmycompany] = useState()
    const [loading, setloading] = useState(true);
    const [errors, seterrors] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchcompany = async () => {
            try {
                const companyData = await GetMycompany(userId);
                setmycompany(companyData)
                setloading(false)
            } catch (error) {
                seterrors(error)
                setloading(false)
            }
        }

        if (userId) {
            fetchcompany();
        } else {
            console.warn('No userId found');
            navigate('/login'); // Redirect to login if userId is missing

        }

    }, [userId , navigate])

    if (loading) {
        return <Loading />;
    }

    if (errors) {
        return <div>Error: {errors.message || 'Something went wrong'}</div>;
    }


    const handleEdit = ()=>{
        navigate(`/EditCompany/${userId}`);
    }
    
    const handleback = () => {
        navigate('/Home')
    }



    return (
        <div className="Company">
            <h3>COMPANY DATA</h3>
            <form >
                <div className="container">
                    <div className="leftSide-container">



                        {/* COMPANY NAME */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="CompanyName">
                                    COMPANY NAME 
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="CompanyName"
                                    name="CompanyName"
                                    placeholder="CompanyName..."
                                    readOnly
                                      value={mycompany.CompanyName}
                                    required
                                />
                            </div>
                        </div>

                        {/*  EMAIL ID */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Email">
                                    EMAIL ID 
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email..."
                                      value={mycompany.Email}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                        {/* PHONE NUMBER */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="JobTitle">
                                    PHONE NUMBER 
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="JobTitle"
                                    placeholder="Phonenumber..."
                                      value={mycompany.Phonenumber}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                        {/*ADDRESS  */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="JobTitle">
                                    ADDRESS 
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="Address"
                                    name="Address"
                                    placeholder="Address..."
                                    readOnly
                                    value={mycompany.Address}
                                    required
                                />
                            </div>
                        </div>

                        {/* FACEBOOK */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Facebook ID">
                                    FACEBOOK 
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="Facebook"
                                    name="Facebook"
                                    placeholder="Facebook ID..."
                                    readOnly
                                    value={mycompany.FaceBook || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* LINKEDLN ID */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Instagram">
                                    INSTAGRAM
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="Instagram"
                                    name="Instagram"
                                    placeholder="Instagram Id..."
                                    readOnly
                                    value={mycompany.Instagram}
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
                                    value={mycompany.About}
                                    required
                                />
                            </div>
                        </div>

                        <div className='files'>
                            <div>
                                <h4>Logo</h4>
                                {mycompany.Logo ? (
                      <img className="logo" src={`${BASE_URL}/UserFiles/${mycompany?.Logo}`}  />
                    ) : (
                      <p>No logo available</p>
                    )}
                            </div>
                            <div>
                                <h4>Image</h4>
                                {mycompany?.Image ? (
    
                      <img className="image" src={`${BASE_URL}/UserFiles/${mycompany?.Image}`} alt="Image" />
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

export default ViewCompnay