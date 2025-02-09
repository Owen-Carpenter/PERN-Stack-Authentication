import "../styles/Authentication.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Register() {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username || !email || !password || !confirmPassword){
            alert("Please fill in all required fields");
            return;
        }

        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        
        axios.post("http://localhost:8080/register", {username, password, email})
        .then(result => {
            setSuccess("Registration successful")
            console.log(result);
            navigate('/login');
        })
        .catch(err => {
            if (err.response && err.response.status === 409) {
                setError("Username already exists");
            } else {
                setError("An error occurred during registration. Please try again.");
            }
            setSuccess("");
            console.log(err);
        });
    }
    
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
                    <img className='auth-logo' src="/client/public/logo.png" alt="" />
                    <h1>Register</h1>
                    <form onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" id="name" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input required type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input required type="password" id="confirm-password" name="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button className="login-submit-btn" type="submit">Sign Up</button>
                    </form>
                    <h4>Already have an account?<span><Link to={"/Login"}>Login</Link></span></h4>
                </div>
            </section>
        </div>
    )
}
