
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateCompanyPassword } from '../../../../Api/MyCompany';
import pwd from '../../../Assets/AssetsProvider';
import './updatepassword.css'

function UpdatePassword() {
  const { companyId } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // password hide and show
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCurrentPwd, setShowCurrentPwd] = useState(false);

  // password "strength" validation
  const [passwordCriteria, setPasswordCriteria] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });
  const [showPasswordCriteria, setShowPasswordCriteria] = useState(false); // New state to show/hide criteria

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
    setPasswordCriteria({
      hasUpperCase: /[A-Z]/.test(value),
      hasLowerCase: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
    });
  };

  const handlePasswordFocus = () => {
    setShowPasswordCriteria(true);
  };

  const handlePasswordBlur = () => {
    if (!setPassword.newPassword) {
      setShowPasswordCriteria(false);
    }
  };

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value })
  }

  const validation = () => {
    let formErrors = {};
    let valid = true;

    if (password.newPassword !== password.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }
    setErrors(formErrors);
    return valid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) {
      console.log(errors, "Validation Failed");
      return;
    }

    try {
    //   debugger
      const response = await UpdateCompanyPassword(companyId, password)

      if (response.message === "Password updated successfully") {
        alert('Password updated successfully!');
        setSuccessMessage(response.message);
        navigate(`/EditCompany/${companyId}`);

        setErrors({});
      } else {
        setErrors({ form: "Password update failed. Please try again." });
        setSuccessMessage('');
      }

    } catch (error) {

      if (error.response && error.response.status === 400 && error.response.data.message === 'Current password is incorrect') {
        // if (error.response.data.message  === "Current password is incorrect" && error.response.status(400) ) {
        alert('Current password is incorrect');

      } else {
        setErrors({ form: error.response ? error.response.data.message : 'Failed to update password' });
        setSuccessMessage('');
      }

    }
  }

  const handleback = () => {
    navigate(`/UserEdit/${companyId}`)
  }

  return (
    <div className="Updatepassword">
      <h3> PASSWORD EDIT</h3>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="leftSide-container">

            {/* Current Password */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="currentPassword">
                  CURRENT PASSWORD <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type={showCurrentPwd ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="currentPassword..."
                  value={password.currentPassword}
                  onChange={handlechnage}
                  required
                />
                {password.currentPassword && (
                  <img
                    src={showCurrentPwd ? pwd.Hidepwd : pwd.Showpwd}
                    alt={showCurrentPwd ? "Hide Password" : "Show Password"}
                    className="pwd-img"
                    onClick={() => setShowCurrentPwd(!showCurrentPwd)}
                  />
                )}
              </div>
            </div>

            {/* New Password */}
            <div className='row'>
              <div className="col-25">
                <label htmlFor="newPassword">
                  NEW PASSWORD <span className="mandatory-indicator">*</span>
                </label>
              </div>

              <div className="col-75">
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={password.newPassword}
                  name="newPassword"
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  placeholder="Enter NewPassword..."
                />
                {password.newPassword && (
                  <img
                    src={showNewPassword ? pwd.Hidepwd : pwd.Showpwd}
                    alt={showNewPassword ? "Hide Password" : "Show Password"}
                    className="pwd-img"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  />
                )}

                {errors.Password && <p className="error">{errors.Password}</p>}
              </div>
              {showPasswordCriteria && (
                <div className="password-criteria">
                  <label>Password must include:</label>
                  <div>
                    <input type="checkbox" checked={passwordCriteria.hasUpperCase} readOnly /> Uppercase Letter
                  </div>
                  <div>
                    <input type="checkbox" checked={passwordCriteria.hasLowerCase} readOnly /> Lowercase Letter
                  </div>
                  <div>
                    <input type="checkbox" checked={passwordCriteria.hasNumber} readOnly /> Number
                  </div>
                  <div>
                    <input type="checkbox" checked={passwordCriteria.hasSpecialChar} readOnly /> Special Character
                  </div>
                </div>
              )}

            </div>

            {/* confirmPassword */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="confirmPassword">
                  CONFIRM PASSWORD <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirmPassword..."
                  value={password.confirmPassword}
                  onChange={handlechnage}
                  required
                />
              </div>
            </div>
            {errors.form && <p className="error">{errors.form}</p>}
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

          </div>
        </div>
        {successMessage && <p className="success">{successMessage}</p>}

        <div className="buttonHolder">

          <button className="button_02" type="button" onClick={handleback}>
            Back
          </button>

          <button className="button_03" type="submit" >
            Submit
          </button>

        </div>
      </form>
    </div>
  );
}


export default UpdatePassword
