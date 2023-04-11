import { useRoutes, Navigate } from 'react-router-dom';
import { getCookie, cookieConfig } from '@/utils/cookie';
import LoginPage from '@/pages/LoginPage';
import Dashboard from '@/pages/Dashboard';

export default function AppRoutes() {
    const accessToken = getCookie(cookieConfig.names.accessToken);

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

    return <>{useRoutes(accessToken ? protectedRoutes : publicRoutes)}</>;
};
