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
            const res = await axios.post(
                'http://localhost:3000/user/signup',
                { name, email, Password },
                // { withCredentials: true }
            );
            console.log(res.data);
            navigate('/');
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
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />

                <input
                    name='email'
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                    name='Password'
                    type="Password"
                    placeholder="Password"
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Signup</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
};

export default Signup;
