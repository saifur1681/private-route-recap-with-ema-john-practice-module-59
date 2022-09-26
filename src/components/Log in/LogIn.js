import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className="form-card" >
            <form>
                <h2 className="form-title" >Log in</h2>
                <div className="input-group" >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-group" >
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div>
                   
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