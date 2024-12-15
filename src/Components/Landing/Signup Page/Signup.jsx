
import React, { useState } from 'react';
import { register } from '../../../Api/Landing';
import './signup.css';

function Signup({ setloginsignup }) {

    const [signUpForm, setSignUpForm] = useState({
        Phonenumber: '',
        Email: '',
        password: '',
        ConfirmPassword:'',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [passwordCriteria, setPasswordCriteria] = useState({
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    });

    const [showPasswordCriteria, setShowPasswordCriteria] = useState(false); // New state to show/hide criteria

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    }

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (signUpForm.Phonenumber.length < 8) {
            formErrors.Phonenumber = "Please Enter PhoneNumber ";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(signUpForm.Email)) {
            formErrors.Email = "Email must be a valid email address";
            valid = false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
        if (!passwordRegex.test(signUpForm.password)) {
            formErrors.Password = "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character";
            valid = false;
        }

        if (signUpForm.password !== signUpForm.ConfirmPassword) {
            formErrors.ConfirmPassword = "Passwords do not match";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log("Validation Failed");
            return;
        }

        const userData = {
            Email: signUpForm.Email,
            Phonenumber: signUpForm.Phonenumber,
            password: signUpForm.password,
            ConfirmPassword: signUpForm.ConfirmPassword,
        };

        try {
            const response = await register(userData);
            if (response.message === "Sign-up successful") {
                alert('Sign-up successful')
                setSuccess(response.message);
                setloginsignup('Login');
                setErrors({});
            } else {
                setErrors({ form: "Sign-up failed. Please try again." });
                setSuccess(''); // Reset success message
            }

        } catch (error) {
            if (error.response && error.response.status === 409) {
                setErrors({ form: error.response.data.message });
            } else {
                setErrors({ form: "Sign-up failed. Please try again." });
            }
            setSuccess('');
        }
    };

    // checking password includes all the password validation data
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setSignUpForm({ ...signUpForm, password: password });

        setPasswordCriteria({
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        });
    };

    const handlePasswordFocus = () => {
        setShowPasswordCriteria(true);
    };

    const handlePasswordBlur = () => {
        if (!signUpForm.password) {
            setShowPasswordCriteria(false);
        }
    };
    // -----------------------------------------------------------//

    const handlesignup = () => {
        setloginsignup('Login')
    }

    return (
        <div className='signup'>
            <div className="signup-form">
                <h2>New Account</h2>
                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email <span className='required_symbol'>*</span></label>
                        <input
                            type="email"
                            value={signUpForm.Email}
                            name="Email"
                            onChange={(e) => setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })}
                            placeholder="Enter Email..."
                        />
                        {errors.Email && <p className="error">{errors.Email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                        <label>Phone Number <span className='required_symbol'>*</span></label>
                        <input
                            type="text"
                            value={signUpForm.Phonenumber}
                            name="Phonenumber"
                            onChange={handleChange}
                            // onChange={(e) => setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })}
                            placeholder="Enter Phone Number..."
                        />
                        {errors.Phonenumber && <p className="error">{errors.Phonenumber}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label>Password <span className='required_symbol'>*</span></label>
                        <input
                            type="password"
                            value={signUpForm.password}
                            name="password"
                            onChange={handlePasswordChange}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                            placeholder="Enter Password..."
                        />
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

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label>Confirm Password <span className='required_symbol'>*</span></label>
                        <input
                            type="password"
                            value={signUpForm.ConfirmPassword}
                            name="ConfirmPassword"
                            onChange={handleChange}
                            // onChange={(e) => setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })}
                            placeholder="Confirm Password"
                        />
                        {errors.ConfirmPassword && <p className="error">{errors.ConfirmPassword}</p>}
                    </div>

                    {success && <p className="success">{success}</p>}
                    {errors.form && <p className="error">{errors.form}</p>}

                    <button type="submit" className='button_02'><strong>Sign Up</strong></button>
                </form>
                <div>
                    <p>Have An Account? <span className='login-link' onClick={() => handlesignup()}><strong>Log In</strong></span></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
