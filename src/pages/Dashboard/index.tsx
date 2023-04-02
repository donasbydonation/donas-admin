import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Creator from '@/pages/Creator';
import Schedule from '@/pages/Schedule';
import { ListItem, TabPane } from './components';

const StyledContainer = styled.div`
    background-color: #FFE6EB;
    padding: 0.75rem;
`;

export default function Dashboard(props: {eventKey: string}) {
    return (
        <StyledContainer className="h-full">
            <Tab.Container id="dashboard-page" defaultActiveKey={props.eventKey}>
                <Row>
                    <Col sm={2}>
                        <Card>
                            <Card.Header>Menu</Card.Header>
                            <ListGroup variant="flush">
                                <ListItem href="/schedule">스케줄 관리</ListItem>
                                <ListItem href="/creator">크리에이터 관리</ListItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <TabPane eventKey="/schedule">
                                <Schedule />
                            </TabPane>
                            <TabPane eventKey="/creator">
                                <Creator />
                            </TabPane>
                        </Tab.Content>
                    </Col>
                  </Row>
            </Tab.Container>
        </StyledContainer>
    );
}
