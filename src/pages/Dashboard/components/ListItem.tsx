import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

export function ListItem(props: {href: string, children: ReactNode}) {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(props.href);
    };

    return (
        <ListGroup.Item
            action
            eventKey={props.href}
            onClick={onClickHandler}
        >
            {props.children}
        </ListGroup.Item>
    );
}
