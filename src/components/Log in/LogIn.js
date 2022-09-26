import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate("/shop")
    }

    const handleUserLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-card" >
            <form onSubmit={handleUserLogIn} >
                <h2 className="form-title" >Log in</h2>
                <div className="input-group" >
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" required />
                </div>
                <div className="input-group" >
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required />
                </div>
                <div>
                    <p style={{ color: 'red' }} >{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="button" type="submit" value="Log in" />
                </div>
                <div>
                    <p className="create-account-style">
                        New to Ema John? <Link className="link-style" to="/signup" >Create a new account</Link>
                    </p>
                </div>
            </form>

        </div>
    );
};

export default LogIn;