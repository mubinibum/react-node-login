"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role) {
            if (role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/member');
            }
        }
    }, [router]);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });

            localStorage.setItem('token', response.data.token);
            const decoded = jwtDecode(response.data.token);
            localStorage.setItem('role', decoded.role);

            setMessage('Login successful');
            if (decoded.role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/member');
            }
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}
