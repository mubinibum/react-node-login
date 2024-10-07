"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token) {
            setIsAuthenticated(true);
            setRole(role);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        router.push('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/" className="navbar-brand">My Webapp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? (
                        <>
                            {role === 'admin' && (
                                <li className="nav-item">
                                    <Link href="/admin" className="nav-link">Admin Dashboard</Link>
                                </li>
                            )}
                            {role === 'user' && (
                                <li className="nav-item">
                                    <Link href="/member" className="nav-link">User Dashboard</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

