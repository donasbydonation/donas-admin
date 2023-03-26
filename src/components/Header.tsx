import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #FF3363;
    position: fixed;
    width: 100%;
    padding: 0% 10%;
    height: 40px;
    top: 0px;
`;

const StyledLogo = styled.img`
    height: 40px;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledLogo src="/images/logo.png" alt="donas-logo" />
        </StyledHeader>
    );
}
