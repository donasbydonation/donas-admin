import { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import { isAuth, authConfig } from '@/utils/auth';

const StyledNavbar = styled(Navbar)`
    background-color: #FF3363;
    height: 50px;
`;

export default function Header() {
    const [loginButton, setLoginButton] = useState<ReactNode>();
    const [cookies, , removeCookies] = useCookies([
        authConfig.cookies.names.accessToken,
        authConfig.cookies.names.refreshToken,
        authConfig.cookies.names.username,
    ]);

    const onClickLogout = () => {
        removeCookies(authConfig.cookies.names.accessToken);
        removeCookies(authConfig.cookies.names.refreshToken);
        removeCookies(authConfig.cookies.names.username);
        window.alert("로그아웃 되었습니다.");
        window.location.href = "/login";
    };

    const onCookieChanged = () => {
        if (isAuth()) {
            setLoginButton(
                <Button size="sm" variant="outline-light" onClick={onClickLogout}>
                    Logout
                </Button>
            );
        } else {
            setLoginButton(null);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onCookieChanged, [cookies]);

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
                {loginButton}
            </Container>
        </StyledNavbar>
    );
}
