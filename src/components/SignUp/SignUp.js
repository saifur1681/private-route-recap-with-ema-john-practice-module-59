import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError("(Password minimum 6 character long) ")
        }

        if (password !== confirmPassword) {
            setError("(Your two Password didn't match)")
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-card" >
            <form onSubmit={handleCreateUser} >
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
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                </div>

                <div>
                    <p style={{ color: 'red' }} >{error}</p>
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