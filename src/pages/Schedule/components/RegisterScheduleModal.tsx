import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';
// import { input } from '@/utils/getElementById';
import { CreatorInfoShort } from '@/types';

export function RegisterScheduleModal(props: {show: boolean, handleClose: () => void}) {
    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

    };

    const [allCreators,setAllCreators] = useState<Array<CreatorInfoShort>>([]);
    useEffect(() => {
        apiCall.getAllCreators().then(body => {
            setAllCreators(body);
        }).catch((err) => {
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
                                <option value={creator.id}>
                                    {creator.name} (등록 번호: {creator.id})
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-banner-image">
                        <Form.Label>방송 배너 이미지</Form.Label>
                        <Form.Control type="file" placeholder="방송 배너 이미지" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-name">
                        <Form.Label>방송 제목</Form.Label>
                        <Form.Control type="text" placeholder="방송 제목" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-description">
                        <Form.Label>방송 상세 설명</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-schedule-date">
                        <Form.Label>방송 시간</Form.Label>
                        <Form.Control type="datetime-local" placeholder="방송 시간" />
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
