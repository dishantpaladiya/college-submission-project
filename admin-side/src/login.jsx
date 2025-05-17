
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const txtemail = useRef();
    const txtpassword = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var params = new FormData();
        params.set('email', email);
        params.set('password', password);
        console.log(params);
        axios.post('http://localhost/projects/api/login-api.php', params).then(function (response) {
            if (response.data['status'] === 'yes') {
                alert("Login Success.");
                localStorage.setItem('isLogin', 'yes');
                localStorage.setItem('email', email);
                navigate('/user-list');
            } else {
                alert("Login Fail.");
            }
        });
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src="assets/images/login1.jpg" alt="Login" className="login-image" />
                <div className="login-form">
                    <h2>Login</h2>
                    <p>Please enter your credentials to access your account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required ref={txtemail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required ref={txtpassword} />
                        </div>
                        <button type="submit" className="btn">Login as Admin</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;