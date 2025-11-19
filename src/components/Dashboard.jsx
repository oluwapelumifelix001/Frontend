import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    };
    return (
        <>
            <div>Dashboard</div>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard