import { useRoutes, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenState';
import LoginPage from '@/pages/LoginPage';
import Dashboard from '@/pages/Dashboard';

export default function AppRoutes() {
    const [token] = useRecoilState(tokenState);

    const commonRoutes = [
        { path: "/login", element: <LoginPage /> },
    ];

    const protectedRoutes = [
        { path: "/", element: <Dashboard eventKey="/schedule" /> },
        { path: "/schedule", element: <Dashboard eventKey="/schedule" /> },
        { path: "/creator", element: <Dashboard eventKey="/creator" /> },
    ];

    const publicRoutes = [
        { path: "*", element: <Navigate to="/login" /> },
    ];

    const routes = token ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return <>{element}</>;
};
