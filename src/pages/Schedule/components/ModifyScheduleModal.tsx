import { MouseEventHandler } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';
import { ScheduleInfo } from '@/types';

export function ModifyScheduleModal(props: {
    show: boolean,
    handleClose: () => void,
    id: number
}) {
    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        apiCall.modifySchedule(props.id, {
            bannerImage: (input("modify-schedule-banner-image").files as FileList)[0],
            name: input("modify-schedule-name").value,
            description: input("modify-schedule-description").value,
            datetime: new Date(input("modify-schedule-date").value).toISOString(),
        }).then(() => {
            alert("수정되었습니다.");
        }).catch(() => {
            alert("수정에 실패하였습니다.");
        }).finally(() => {
            props.handleClose();
        });
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>스케줄 변경</Modal.Title>
            </Modal.Header>

            <Form id="modify-schedule">
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="modify-schedule-banner-image">
                        <Form.Label>방송 배너 이미지</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-schedule-name">
                        <Form.Label>방송 제목</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-schedule-description">
                        <Form.Label>방송 상세 설명</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-schedule-date">
                        <Form.Label>방송 시간</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onCancel}>취소</Button>
                    <Button variant="primary" type="submit" onClick={onSubmit}>저장</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
