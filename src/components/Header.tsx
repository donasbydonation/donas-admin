import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
    background-color: #FF3363;
    height: 50px;
`;

export default function Header() {
    return (
        <StyledNavbar variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="donas-logo"
                        src="/images/logo.png"
                        height="25"
                    />
                </Navbar.Brand>
            </Container>
        </StyledNavbar>
    );
}

