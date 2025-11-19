import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 25px",
                    background: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                    fontFamily: "Arial, sans-serif"
                }}
            >
                <h2 style={{ margin: 0 }}>Dashboard</h2>

                <button
                    onClick={logout}
                    style={{
                        padding: "8px 16px",
                        background: "#d9534f",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                    onMouseOver={e => (e.target.style.background = "#c9302c")}
                    onMouseOut={e => (e.target.style.background = "#d9534f")}
                >
                    Logout
                </button>
            </div>

            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h3>Welcome to your dashboard!</h3>
                
            </div>
        </>

    )
}

export default Dashboard