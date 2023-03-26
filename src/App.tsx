import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import LoginPage from '@/pages/LoginPage';
import Header from '@/components/Header';
import { RecoilRoot } from 'recoil';

const StyledApp = styled.div`
    padding-top: 40px;
`;

export default function App() {
    return (
        <StyledApp>
            <RecoilRoot>
                <Header />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </RecoilRoot>
        </StyledApp>
    );
}
