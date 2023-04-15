import { useState, MouseEventHandler } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { ScheduleInfo } from '@/types';
import * as apiCall from '../api';
import { ModifyScheduleModal } from '.';

export type TableDataProps = ScheduleInfo;

function parseIso8601(iso8601: string): string {
    const date = new Date(iso8601);

    const year = date.getFullYear();

    const month = date.getMonth() + 1;

    const day = date.getDate();

    const ampm = date.getHours() >= 12 ? "오후" : "오전";

    let hours = date.getHours() % 12;
    hours = hours ? hours : 12;

    const minutes = date.getMinutes();
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}시 ${strMinutes}분`;
}

export function TableData(props: TableDataProps) {
    const onClickDelete: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            apiCall.deleteSchedule(props.id)
            .then(() => {
                alert("삭제되었습니다.");
            }).catch(() => {
                alert("삭제에 실패하였습니다.");
            });
        }
    };

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <>
            <ModifyScheduleModal
                show={modalShow}
                handleClose={handleModalClose}
                id={props.id}
            />
            <tr>
                <td>{props.id}</td>
                <td>{props.creator.name}</td>
                <td>
                    <Image
                        src={props.bannerImage as string}
                        width={128}
                        height={64}
                        rounded
                    />
                </td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{parseIso8601(props.datetime)}</td>
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
