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
            const res = await axios.post('http://localhost:3000/user/login', { email, Password }, { withCredentials: true });
            console.log(res.data);
            navigate('/dashboard'); 
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };
    return (
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};
export default Login;
