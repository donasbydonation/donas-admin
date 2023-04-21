import { FormEvent } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import * as apiCall from './api';
import { cookieConfig, setCookie } from '@/utils/cookie';
import { input } from '@/utils/getElementById';

const StyledPage = styled.div`
    background-color: #FFE6EB;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledForm = styled(Form)`
    width: 500px;
`;

export default function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLButtonElement>)  => {
        e.preventDefault();

        const username = input("login-id").value;

        apiCall.login({
            username,
            password: input("login-pw").value,
        }).then(body => {
            setCookie(cookieConfig.names.accessToken, body.accessToken);
            setCookie(cookieConfig.names.refreshToken, body.refreshToken);
            setCookie(cookieConfig.names.username, username);
            navigate("/");
        }).catch(err => {
            alert("앙틀렸띠");
        });
    }

    return (
        <StyledPage>
            <Card>
                <Card.Body>
                    <Card.Title>관리자 로그인</Card.Title>
                    <StyledForm onSubmit={handleSubmit} id="login">
                        <Form.Group className="mb-3" controlId="login-id">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter ID"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="login-pw">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">로그인</Button>
                    </StyledForm>
                </Card.Body>
            </Card>
        </StyledPage>
    );
}
