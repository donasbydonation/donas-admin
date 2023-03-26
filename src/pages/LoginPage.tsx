import { FormEvent } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { loginFN } from '@/utils/auth'
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenState';

const StyledPage = styled.div`
    background-color: #FFE6EB;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledForm = styled(Form)`
    width: 500px;
`;

export default function LoginPage() {
    const navigate = useNavigate();
    const [, setToken] = useRecoilState(tokenState);

    const handleSubmit = (e: FormEvent<HTMLButtonElement>)  => {
        e.preventDefault();

        loginFN({
            id: (document.getElementById("login-id") as HTMLInputElement).value,
            pw: (document.getElementById("login-pw") as HTMLInputElement).value,
        }).then(body => {
            ////
            // TODO: set token to recoil
            console.log(body);
            setToken("TEST_TOKEN");
            ////
            navigate("/");
        });
    }

    return (
        <StyledPage className="h-full">
            <Card>
                <Card.Body>
                    <Card.Title>Administrator Log In</Card.Title>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="login-id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter ID"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login-pw">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Log in
                        </Button>
                    </StyledForm>
                </Card.Body>
            </Card>
        </StyledPage>
    );
}
