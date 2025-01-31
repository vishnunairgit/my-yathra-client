

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/my-yathra/logo.jpeg';
import pwd from "../../Assets/AssetsProvider";
import './login.css';
import { login } from '../../../Api/Landing';
import { useDispatch } from 'react-redux';
import { updateCompanyDetails } from '../../ToolKit/companySlice';

function Login({ setloginsignup }) {
  const [loginForm, setLoginForm] = useState({
    Email: '',
    password: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(loginForm);
      if (response.message === "Login successful" && response.token) {
        alert('Login successful');
        setSuccess(response.message);
        setErrors('');
        localStorage.setItem('token', response.token);
        const parsedToken = parseJwt(response.token);
        localStorage.setItem('company', JSON.stringify(parsedToken)); 
        // Dispatch action to update Redux state
        dispatch(updateCompanyDetails(parsedToken));
        navigate('/Home');
      } else {
        setErrors("Login failed. Please try again.");
        setSuccess('');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrors(error.response.data.message);
      } else {
        setErrors('Login failed. Please try again.');
      }
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  };

  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        <div>
          <img src={logo} alt="Net America Logo" />
        </div>
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="UserName">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={loginForm.Email}
              onChange={handleChange}
              required
            />
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPwd ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleChange}
                required
              />
              {loginForm.password && (
                <img
                  src={showPwd ? pwd.Hidepwd : pwd.Showpwd}
                  alt={showPwd ? "Hide Password" : "Show Password"}
                  className="pwd-img"
                  onClick={() => setShowPwd(!showPwd)}
                />
              )}
            </div>
          </div>
          {success && <p className="success-message">{success}</p>}

          {errors && <p className="error-message">{errors}</p>}
          <button type="submit" disabled={isLoading} className="button_01">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="signup-link">
          <p><strong>Is this your first time here?</strong></p>
          <button type="button" className="button_02" onClick={() => setloginsignup('Signup')}>
            <strong>Create New Account</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
