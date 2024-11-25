

import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

import React, { useEffect, useState } from 'react';
import Instagram from '../../Assets/my-yathra/icons8-instagram-35.png'
import FaceBook from '../../Assets/my-yathra/icons8-facebook-35.png'
import "./mycompany.css"
import { BASE_URL } from '../../../Constants/BaseUrl';
import { GetMycompany } from '../../../Api/MyCompany'
import { useSelector } from 'react-redux';

function Mycompany() {


    // const companyId = useSelector(state => state.company.companyDetails.companyId);
    const companyId = useSelector(state => state.company.companyDetails?.companyId );
    // console.log(companyId,"-----------companyId-------- ");
    

    const [mycompany, setmycompany] = useState()
    const [loading, setloading] = useState(true);
    const [errors, seterrors] = useState(null)
    const navigate = useNavigate();


    useEffect(() => {
        const fetchcompany = async () => {
            try {
                const companyData = await GetMycompany(companyId);
                setmycompany(companyData)
                setloading(false)
            } catch (error) {
                seterrors(error)
                setloading(false)
            }
        }

        if (companyId) {
            fetchcompany();
        } else {
            console.warn('No companyId found');
            navigate('/login'); 

        }

    }, [companyId, navigate ])

    if (loading) {
        return <Loading />;
    }

    if (errors) {
        return <div>Error: {errors.message || 'Something went wrong'}</div>;
    }


    const handlelinkedin = () => {
        window.open(mycompany.FaceBook, '_blank')
    }

    const handlewebsite = () => {
        window.open(mycompany?.Instagram, '_blank');
    }

    return (
        <div className='MYcompany'>

            <div className='mainImg'>
                {mycompany?.imageFile ? (
                    <img className="logo" src={`${BASE_URL}/UserFiles/${mycompany?.imageFile}`} />
                ) : (<p>No image available</p>
                )}
            </div>
            <div className='aboutus'>
                <h3>ABOUT US</h3>
                <div>
                    <p>{mycompany?.About}</p>
                </div>
            </div>
            <div className='bottomNav'>
                <div className='bottomNav-2'>
                    <div className='first'>
                        <div className='companydetails'>
                            {mycompany?.logoFile ? (
                                <img className="logo" src={`${BASE_URL}/UserFiles/${mycompany?.logoFile}`} />
                            ) : (<p>No logo available</p>
                            )}
                            <h5><strong>{mycompany?.CompanyName} </strong></h5>
                        </div>
                        <p>{mycompany && mycompany.About
                            ? mycompany?.About?.length > 300
                                ? `${mycompany?.About?.slice(0, 300)}...`
                                : mycompany?.About
                            : "Loading or no about text available"}
                        </p>
                    </div>
                    <div className='Second'>
                        <h5><strong>Address</strong> </h5>
                        <div>{mycompany?.CompanyName}</div>
                        <p>{mycompany?.Address}</p>
                    </div>
                    <div className='Third'>
                        <h5><strong>Contact</strong></h5>
                        <div>
                            <div>{mycompany?.Phonenumber}</div>
                            <div>{mycompany?.Email}</div>
                        </div>
                    </div>
                </div>
                <div className='bottomNav-1'>
                    <img src={FaceBook} alt="FaceBook" title='FaceBook' onClick={handlelinkedin} />
                    <img src={Instagram} alt="Instagram" title='Instagram' onClick={handlewebsite} />

                </div>
            </div>
        </div>
    )
}

export default Mycompany;
