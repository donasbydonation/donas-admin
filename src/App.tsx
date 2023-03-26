import styled from 'styled-components';
import LoginPage from './pages/LoginPage';

const StyledApp = styled.div`
    padding-top: 40px;
`;

export default function App() {
    return (
        <StyledApp>
            <LoginPage />
        </StyledApp>
    );
}
