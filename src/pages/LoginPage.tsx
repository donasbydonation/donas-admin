import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
    return (
        <StyledPage className="h-full">
            <Card>
                <Card.Body>
                    <Card.Title>Log in</Card.Title>
                    <StyledForm>
                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter ID"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Log in</Button>
                    </StyledForm>
                </Card.Body>
            </Card>
        </StyledPage>
    );
}
