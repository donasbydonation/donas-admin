import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import Header from '@/components/Header';
import AppRoute from '@/routes';

const StyledApp = styled.div`
    padding-top: 50px;
`;

export default function App() {
    return (
        <StyledApp>
            <RecoilRoot>
                <Header />
                <AppRoute />
            </RecoilRoot>
        </StyledApp>
    );
}
