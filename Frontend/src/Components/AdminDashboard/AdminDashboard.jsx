import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
    
        fetch("/api/protected", {  // Using proxy
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(() => {
            localStorage.removeItem("token");
            navigate("/login");
        });
    }, [navigate]);
    
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        await fetch("/api/logout", {  // Using proxy
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.removeItem("token");
        navigate("/login");
    };
    

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>{message}</p>
            <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Logout</button>
        </div>
    );
}

export default AdminDashboard;
