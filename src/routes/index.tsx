import { useRoutes, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenState';
import LoginPage from '@/pages/LoginPage';

export default function AppRoutes() {
    const [token] = useRecoilState(tokenState);

    const commonRoutes = [
        { path: "/login", element: <LoginPage /> },
    ];

    const protectedRoutes = [
        { path: "/", element: <div>TODO: main page</div> },
    ];

    const publicRoutes = [
        { path: "*", element: <Navigate to="/login" /> },
    ];

    const routes = token ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return <>{element}</>;
};
