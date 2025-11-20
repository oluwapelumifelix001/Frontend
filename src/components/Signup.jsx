import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post(
            //     'http://localhost:3000/user/signup',
            //     { name, email, Password },
            //     // { withCredentials: true }
            // );
            const res = await axios.post(
                'https://backend-jsh5.onrender.com/user/signup',
                { name, email, Password },
                // { withCredentials: true }
            );
            console.log(res.data);
            navigate('/login');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "Signup failed");
            } else if (err.request) {
                setError("No response from server");
            } else {
                setError("Signup failed");
                console.error("Signup failed:", err.message)
            }
        }
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '60px auto',
                padding: '30px',
                borderRadius: '12px',
                background: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                        display: 'block',
                        marginBottom: '12px',
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                    }}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                    style={{
                        display: 'block',
                        marginBottom: '12px',
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                    }}
                />

                <input
                    name="Password"
                    type="Password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        display: 'block',
                        marginBottom: '12px',
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: '#4a6cf7',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Signup
                </button>
            </form>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>

    );
};

export default Signup;
