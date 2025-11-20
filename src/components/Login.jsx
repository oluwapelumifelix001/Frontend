import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post('http://localhost:3000/user/login', { email, Password }, { withCredentials: true });
            const res = await axios.post('https://backend-jsh5.onrender.com/user/login', { email, Password }, { withCredentials: true });
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            console.log(err)
        }
    };
    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "60px auto",
                padding: "30px",
                borderRadius: "12px",
                background: "#ffffff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        marginBottom: "15px",
                        fontSize: "14px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        marginBottom: "20px",
                        fontSize: "14px"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "none",
                        background: "#4a90e2",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "0.3s"
                    }}
                    onMouseOver={e => (e.target.style.background = "#3a78c2")}
                    onMouseOut={e => (e.target.style.background = "#4a90e2")}
                >
                    Login
                </button>
            </form>

            {error && (
                <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>
                    {error}
                </p>
            )}

            <p style={{ marginTop: "15px", textAlign: "center" }}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#4a90e2", textDecoration: "none" }}>
                    Signup
                </Link>
            </p>
        </div>

    );
};
export default Login;
