import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

const StyledContainer = styled.div`
    height: 100%;
    padding: 0.75rem;
`;

const StyledSidebar = styled(StyledContainer)`
    background-color: #FFE6EB;
`;

const StyledContent = styled(StyledContainer)`
    background-color: #FFFFFF;
`;

function NavItem(props: {href: string, children: ReactNode}) {
    const navigate = useNavigate();

    const onClickHandler = (href: string) => {
        return () => {
            navigate(href);
        };
    };

    return (
        <Nav.Item>
            <Nav.Link
                eventKey={props.href}
                onClick={onClickHandler(props.href)}
            >
                {props.children}
            </Nav.Link>
        </Nav.Item>
    );
}

export default function Dashboard() {
    return (
        <Tab.Container id="dashboard-page" defaultActiveKey="/creator">
            <Row className="g-0 h-full">
                <Col sm={2} className="h-full">
                    <StyledSidebar>
                        <Nav variant="pills" className="flex-column">
                            <NavItem href="/creator">Creator</NavItem>
                            <NavItem href="/schedule">Schedule</NavItem>
                        </Nav>
                    </StyledSidebar>
                </Col>
                <Col sm={10}>
                    <StyledContent>
                    <Tab.Content>
                        <Tab.Pane eventKey="/creator" transition={false}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Manage Creator</Card.Title>
                                    <Card.Text>
                                        TODO: /creator
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="/schedule" transition={false}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Manage Schedule</Card.Title>
                                    <Card.Text>
                                        TODO: /schedule
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                    </StyledContent>
                </Col>
              </Row>
        </Tab.Container>
    );
}
