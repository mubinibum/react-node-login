"use client";
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function AdminPage() {
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            setUserId(decoded.id);
            setUserRole(decoded.role);

        };
        fetchData();
    }, []);

    return (
        <div className="container mt-5  bg-light">
            <h1>Admin Dashboard</h1>
            <p>User ID: {userId}</p>
            <p>User Role: {userRole}</p>
        </div>
    );
}
