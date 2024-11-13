
import React, { useEffect, useState } from 'react';
import { GetMycompany, UpdateCompany } from '../../../Api/MyCompany';
import '../UserView/user.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';


function EditCompany() {
    const { userId } = useParams();
    
    const [company, setcompany] = useState(null);
    const [companyData, setcompanyData] = useState({});
    const [loading, setloading] = useState(true);
    const [errors, setErrors] = useState(null)

    const [CompanyFiles, setCompanyFiles] = useState({
        logoFile: '',
        imageFile: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchcompany = async () => {
            try {
                const Data = await GetMycompany(userId);
                setcompany(Data)
                setcompanyData(Data)
                setloading(false)
            } catch (error) {
                setErrors(error)
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

    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setcompanyData({...companyData, [name]: value });
    };

    // File management
    const editCompanyFile = (e) => {
        const file = e.target.files[0];
        const fileName = e.target.name;
        setCompanyFiles({ ...CompanyFiles, [fileName]: file });
    };

    const handleEditSave = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            for (const key in companyData) {
                formData.append(key, companyData[key]);
            }
            if (CompanyFiles.logoFile) {
                formData.append('logoFile', CompanyFiles.logoFile);
            }
            if (CompanyFiles.imageFile) {
                formData.append('imageFile', CompanyFiles.imageFile);
            }

            await UpdateCompany(userId, formData);
            alert('User updated successfully!');
            navigate('/ViewCompnay');
        } catch (error) {
            console.error("Error updating user:", error);
            setErrors(error);
        }
    };

    const updatePassword = () => {
        navigate(`/EditCompany/${userId}/UpdatePassword`);
    };

    const handleBack = () => {
        navigate('/ViewCompnay');
    };


    return (
        <div className="Company">
            <h3>EDIT COMPANY</h3>
            <form onSubmit={handleEditSave}>
                <div className="container">
                    <div className="leftSide-container">

                
                        {/* Company Name */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="CompanyName">
                                    COMPANY NAME <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="CompanyName"
                                    placeholder="CompanyName..."
                                    onChange={handleCompanyChange}
                                    value={companyData.CompanyName || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
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
                                    value={companyData.Email || ''}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Phonenumber">
                                    PHONE NUMBER <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Phonenumber"
                                    placeholder="Phonenumber..."
                                    onChange={handleCompanyChange}
                                    value={companyData.Phonenumber || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Address">
                                    ADDRESS <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Address"
                                    placeholder="Address..."
                                    onChange={handleCompanyChange}
                                    value={companyData.Address || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* FACEBOOK */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="FaceBook">
                                FACEBOOK <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="FaceBook"
                                    placeholder="FaceBook..."
                                    onChange={handleCompanyChange}
                                    value={companyData.FaceBook || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Instagram">
                                INSTAGRAM <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="Instagram"
                                    placeholder="Instagram..."
                                    onChange={handleCompanyChange}
                                    value={companyData.Instagram || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* About Us */}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="About">
                                    ABOUT US <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    name="About"
                                    placeholder="About..."
                                    onChange={handleCompanyChange}
                                    value={companyData.About || ''}
                                    required
                                />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="about">UPLOAD LOGO</label>
                            </div>

                            <div className="col-75">
                                <input
                                    type="file"
                                    name="logoFile"
                                    accept="image/*"
                                    onChange={editCompanyFile}

                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="about">UPLOAD IMAGE</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="file"
                                    name="imageFile"
                                    accept="image/*"
                                    onChange={editCompanyFile}
                                />
                            </div>
                        </div>

                        <div className='file-view'>
                            {CompanyFiles?.logoFile && (
                                <img
                                    src={URL.createObjectURL(CompanyFiles.logoFile)}
                                    alt="Logo"
                                    style={{ width: "100px", height: "100px" }}
                                />
                            )}
                            {CompanyFiles?.imageFile && (
                                <img
                                    src={URL.createObjectURL(CompanyFiles.imageFile)}
                                    alt="Image"
                                    style={{ width: "100px", height: "100px" }}
                                />
                            )}

                        </div>

                        <div className="row">
                            <div className="col-25">
                                <button type="button" className='button_03' onClick={updatePassword} >Update Password</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="buttonHolder">
                    <button className="button_02" type="button" onClick={handleBack}>
                        Back
                    </button>

                    <button className="button_01" type="submit" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditCompany;
