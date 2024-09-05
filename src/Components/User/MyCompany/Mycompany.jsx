


import React, { useEffect, useState } from 'react';
import linkedin from "../../Assets/icons8-linked-in-35.png";
import website from '../../Assets/icons8-website-35.png'
import "./mycompany.css"
import { BASE_URL } from '../../../Constants/BaseUrl';
import { Getuser } from '../../../Api/User';
import loadingGif from '../../../Components/Assets/loading...gif';
import { useSelector } from 'react-redux';

function Mycompany() {
    const userId = useSelector(state => state.user.userDetails.userId);

    const [company, setcompany] = useState(null)
    const [loading, setloading] = useState(true);
    const [errors, seterrors] = useState(null);

    useEffect(() => {
        const fetchcompany = async () => {
            try {
                const companyData = await Getuser(userId)
                setcompany(companyData);
                setloading(false)
            } catch (error) {
                seterrors(error)
                setloading(false)
            }
        }
        if (userId) {
            fetchcompany()
        } else {
            console.warn('No userId found');
        }
    }, [userId])

    if (loading) {
        return (
            <div className="spinner-container">
                <img src={loadingGif} alt="Loading..." className="spinner" />
            </div>
        );
    }

    const handlelinkedin = () => {
        window.open(company.Linkedin, '_blank')
    }

    const handlewebsite = () => {
        window.open(company?.Website, '_blank');
    }

    return (
        <div className='MYcompany'>
            <div className='mainImg'>
                {company?.Image ? (
                    <img className="logo" src={`${BASE_URL}/UserFiles/${company?.Image}`} />
                ) : (<p>No image available</p>
                )}
            </div>
            <div className='aboutus'>
                <h3>ABOUT US</h3>
                <div>
                    <p>{company?.About}</p>
                </div>
            </div>
            <div className='bottomNav'>
                <div className='bottomNav-2'>
                    <div className='first'>
                        <div className='companydetails'>
                            {company?.Logo ? (
                                <img className="logo" src={`${BASE_URL}/UserFiles/${company?.Logo}`} />
                            ) : (<p>No logo available</p>
                            )}
                            <h5><strong>{company?.CompanyName} </strong></h5>
                        </div>
                        <p>{company && company.About
                            ? company.About.length > 300
                                ? `${company.About.slice(0, 300)}...`
                                : company.About
                            : "Loading or no about text available"}
                        </p>
                    </div>
                    <div className='Second'>
                        <h5><strong>Address</strong> </h5>
                        <div>{company?.CompanyName}</div>
                        <p>{company?.Address}</p>
                    </div>
                    <div className='Third'>
                        <h5><strong>Contact</strong></h5>
                        <div>
                            <div>{company?.Phonenumber}</div>
                            <div>{company?.Email}</div>
                        </div>
                    </div>
                </div>
                <div className='bottomNav-1'>
                    <img src={linkedin} alt="linkedin" title='linkedin' onClick={handlelinkedin} />
                    <img src={website} alt="website" title='website' onClick={handlewebsite} />
                </div>
            </div>
        </div>
    )
}

export default Mycompany;
