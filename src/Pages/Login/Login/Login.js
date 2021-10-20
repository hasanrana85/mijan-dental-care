import React from 'react';
import './Login.css';
import loginimg from '../../../images/login/login-logo.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="login_form">
            
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="middle mt-5">
                        <h1 className="login_header">Login Form</h1>
                        <form>
                            <div className="my-4">
                                <input type="email" name="email" id="email" placeholder="enter your mail" className="form-control" />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="password" className="form-control" />
                            </div>
                            <button className="btn btn-primary form-control mt-3 text-uppercase fw-bold">Sign In</button>
                        </form>
                           <div >
                                <img className="google" src={loginimg} alt="" />

                                <button onClick={handleGoogleLogin} className="btn btn-info mt-5 text-uppercase fw-bold">Google Sign In</button>

                                <br />
                                <Link to="/registration">New User?</Link>
                            </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;