import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

const StyledApp = styled.div`
    padding-top: 40px;
`;

export default function App() {
    return (
        <StyledApp>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </StyledApp>
    );
}
