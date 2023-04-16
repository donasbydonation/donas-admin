import { useState, MouseEventHandler } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import * as apiCall from '../api';
import { ModifyCreatorModal } from '.';
import { CreatorInfo } from '@/types';

export type TableDataProps = CreatorInfo;

export function TableData(props: TableDataProps) {
    const onClickDelete: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            apiCall.deleteCreator(props.id)
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
            <ModifyCreatorModal
                show={modalShow}
                handleClose={handleModalClose}
                id={props.id}
            />
            <tr>
                <td>{props.id}</td>
                <td>
                    <Image
                        src={props.profileImage}
                        width={64}
                        height={64}
                        roundedCircle
                    />
                </td>
                <td>{props.name}</td>
                <td>
                    <a href={props.youtubeURL} target="_blank" rel="noreferrer">
                        {props.youtubeURL}
                    </a>
                </td>
                <td>
                    <a href={props.twitchURL} target="_blank" rel="noreferrer">
                        {props.twitchURL}
                     </a>
                </td>
                <td>
                    <a href={props.africaURL} target="_blank" rel="noreferrer">
                        {props.africaURL}
                    </a>
                </td>
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
