import styled from 'styled-components';
import Header from '@/components/Header';
import AppRoute from '@/routes';

const StyledApp = styled.div`
    padding-top: 50px;
    height: 100%;
`;

export default function App() {
    return (
        <StyledApp>
            <Header />
            <AppRoute />
        </StyledApp>
    );
}
