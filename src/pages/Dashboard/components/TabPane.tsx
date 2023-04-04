import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import { ReactNode } from 'react';

export function TabPane(props: {eventKey: string, children: ReactNode}) {
    return (
        <Tab.Pane eventKey={props.eventKey} transition={false}>
            <Card>
                {props.children}
            </Card>
        </Tab.Pane>
    );
}
