import { useState, useEffect, MouseEventHandler } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';
import { toISOString } from '@/utils/datetime';

type RegisterScheduleModalProps = {
    show: boolean,
    handleClose: () => void,
    updateSchedules: () => void,
};

export function RegisterScheduleModal(props: RegisterScheduleModalProps) {
    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        apiCall.registerSchedule({
            banner: (input("register-schedule-banner-image").files as FileList)[0],
            schedule: {
                creatorId: parseInt(input("register-schedule-creator").value),
                title: input("register-schedule-name").value,
                description: input("register-schedule-description").value,
                scheduledTime: toISOString(input("register-schedule-date").value),
            }
        }).then(() => {
            alert("추가되었습니다.");
            props.updateSchedules();
        }).catch(() => {
            alert("추가 실패하였습니다.");
        }).finally(() => {
            props.handleClose();
        });
    };

    const [allCreators, setAllCreators] = useState<apiCall.GetAllCreatorsResponseDTO>([]);
    useEffect(() => {
        apiCall.getAllCreators().then(body => {
            setAllCreators(body);
        }).catch(() => {
            alert("크리에이터 조회에 실패했습니다.");
        });
    }, []);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>스케줄 추가</Modal.Title>
            </Modal.Header>

            <Form id="register-schedule">
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="register-schedule-creator">
                        <Form.Label>크리에이터 선택</Form.Label>
                        <Form.Select>
                            <option>선택</option>
                            {allCreators.map((creator, idx) => (
                                <option value={creator.id} key={idx}>
                                    {creator.name} (등록 번호: {creator.id})
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-banner-image">
                        <Form.Label>방송 배너 이미지</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-name">
                        <Form.Label>방송 제목</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-description">
                        <Form.Label>방송 상세 설명</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-date">
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
