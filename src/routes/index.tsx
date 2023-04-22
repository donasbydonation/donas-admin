import { useRoutes, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import Dashboard from '@/pages/Dashboard';
import { isAuth } from '@/utils/auth';

export default function AppRoutes() {
    const protectedRoutes = [
        { path: "/", element: <Dashboard eventKey="/schedule" /> },
        { path: "/schedule", element: <Dashboard eventKey="/schedule" /> },
        { path: "/creator", element: <Dashboard eventKey="/creator" /> },
        { path: "*", element: <Navigate to="/" /> },
    ];

    const publicRoutes = [
        { path: "/login", element: <LoginPage /> },
        { path: "*", element: <Navigate to="/login" /> },
    ];

    return <>{useRoutes(isAuth() ? protectedRoutes : publicRoutes)}</>;
};
