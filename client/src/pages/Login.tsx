import React from 'react'
import "../styles/Authentication.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Login() {
    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form || { pathname: "/"}

    const handleLoginSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username || !password) {
            alert("Please fill in all required fields");
            return;
        }

        axios
          .post("http://localhost:8080/auth", { username, password })
          .then((result) => {
            if (result.data.message === "Login successful") {
              localStorage.setItem("isAuthenticated", "true");
              navigate(from, { replace: true });
            } else if (result.data.message === "Incorrect password") {
              alert("Incorrect email or password");
            }
          })
          .catch((err) => console.log(err.message));
    };
    
    return (
        <div>
            <div className="glowing">
                <span style={{ "--i": 1 } as React.CSSProperties}></span>
                <span style={{ "--i": 2 } as React.CSSProperties}></span>
                <span style={{ "--i": 3 } as React.CSSProperties}></span>
            </div>
            <div className="glowing">
                <span style={{ "--i": 1 } as React.CSSProperties}></span>
                <span style={{ "--i": 2 } as React.CSSProperties}></span>
                <span style={{ "--i": 3 } as React.CSSProperties}></span>
            </div>
            <div className="glowing">
                <span style={{ "--i": 1 } as React.CSSProperties}></span>
                <span style={{ "--i": 2 } as React.CSSProperties}></span>
                <span style={{ "--i": 3 } as React.CSSProperties}></span>
            </div>
            <div className="glowing">
                <span style={{ "--i": 1 } as React.CSSProperties}></span>
                <span style={{ "--i": 2 } as React.CSSProperties}></span>
                <span style={{ "--i": 3 } as React.CSSProperties}></span>
            </div>
            <section className="auth-section">
                <div className="auth-container">
                    <img className='auth-logo' src="../public/assets/logo.webp" alt="" />
                    <h1>Login</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input required type="username" id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-submit-btn" type='submit'>Login</button>
                    </form>
                    <h4>Don't have an account?<span><Link to={"/Register"}>Sign up</Link></span></h4>
                </div>
            </section>
        </div>
    );
}
