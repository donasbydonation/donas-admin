import styled from 'styled-components';
import { useState, MouseEventHandler } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { ScheduleInfo } from '@/types';
import * as apiCall from '../api';
import { ModifyScheduleModal } from '.';
import { displayISOString } from '@/utils/datetime';

const Td = styled.td`
    overflow-wrap: anywhere;
`;

type TableDataProps = ScheduleInfo&{
    updateSchedules: () => void,
};

export function TableData(props: TableDataProps) {
    const onClickDelete: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            apiCall.deleteSchedule(props.id)
            .then(() => {
                alert("삭제되었습니다.");
                props.updateSchedules();
            }).catch(() => {
                alert("삭제에 실패하였습니다.");
            });
        }
    };

    const [modalShow, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    return (
        <>
            <ModifyScheduleModal
                show={modalShow}
                handleClose={handleModalClose}
                id={props.id}
                creatorId={props.creator.id as number}
                updateSchedules={props.updateSchedules}
            />
            <tr>
                <Td>{props.id}</Td>
                <Td>{props.creator.name}</Td>
                <td>
                    <Image
                        src={props.bannerImage}
                        width={128}
                        height={64}
                        rounded
                    />
                </td>
                <Td>{props.name}</Td>
                <Td>{props.description}</Td>
                <Td>{displayISOString(props.datetime)}</Td>
                <td>
                    <Button variant="outline-success" size="sm" onClick={handleModalShow}>
                        수정
                    </Button>
                    {" "}
                    <Button variant="outline-danger" size="sm" onClick={onClickDelete}>
                        삭제
                    </Button>
                </td>
            </tr>
        </>
    );
}
