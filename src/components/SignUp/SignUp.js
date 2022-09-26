import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    return (
        <div className="form-card" >
            <form>
                <h2 className="form-title" >Sign Up</h2>
                <div className="input-group" >
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" required />
                </div>
                <div className="input-group" >
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required />
                </div>
                <div className="input-group" >
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" required />
                </div>
                <div>

                    <input className="button" type="submit" value="Sign Up" />
                </div>
                <div>
                    <p className="create-account-style">
                        Already have an Account? <Link className="link-style" to="/login" >Log in</Link>
                    </p>
                </div>
            </form>

        </div>
    );
};

export default SignUp;