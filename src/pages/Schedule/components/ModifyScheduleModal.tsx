import { MouseEventHandler } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';
import { toISOString } from '@/utils/datetime';

type ModifyScheduleModalProps = {
    show: boolean,
    handleClose: () => void,
    id: number,
    creatorId: number,
    updateSchedules: () => void,
};

export function ModifyScheduleModal(props: ModifyScheduleModalProps) {
    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        apiCall.modifySchedule(
            {
                banner: (input("modify-schedule-banner-image").files as FileList)[0],
                schedule: {
                    scheduleId: props.id,
                    creatorId: props.creatorId,
                    title: input("modify-schedule-name").value,
                    description: input("modify-schedule-description").value,
                    scheduledTime: toISOString(input("modify-schedule-date").value),
                },
            },
        ).then(() => {
            alert("수정되었습니다.");
            props.updateSchedules();
        }).catch(() => {
            alert("수정에 실패하였습니다.");
        }).finally(() => {
            props.handleClose();
        });
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>스케줄 수정</Modal.Title>
            </Modal.Header>

            <Form id="modify-schedule">
                <Modal.Body>
                    <Alert variant="danger">
                        [주의!]
                        스케줄이 부분적으로 변경되는 것이 아닌 기존의 스케줄이 덮어씌여집니다. 
                        변경하고 싶지 않은 값은 기존의 것을 복사/붙여넣기 해주세요.
                    </Alert>
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
