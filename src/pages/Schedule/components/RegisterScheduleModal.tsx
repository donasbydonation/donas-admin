import { useState, useEffect, MouseEventHandler } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';
import { toISOString } from '@/utils/datetime';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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

    const onSubmitManual: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        apiCall.registerSchedule({
            banner: (input("manual-register-schedule-banner-image").files as FileList)[0],
            schedule: {
                creatorId: parseInt(input("manual-register-schedule-creator").value),
                title: input("manual-register-schedule-name").value,
                description: input("manual-register-schedule-description").value,
                scheduledTime: toISOString(input("manual-register-schedule-date").value),
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

    const onSubmitExcel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        apiCall.registerScheduleExcel({
            excel: (input("excel-register-schedule-banner-file").files as FileList)[0],
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

            <Tabs defaultActiveKey="manual" id="register-schedule" className="mb-3 mt-3" >
                <Tab eventKey="manual" title="직접 입력">
                    <Form id="manual-register-schedule">
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="manual-register-schedule-creator">
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

                            <Form.Group className="mb-3" controlId="manual-register-schedule-banner-image">
                                <Form.Label>방송 배너 이미지</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="manual-register-schedule-name">
                                <Form.Label>방송 제목</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="manual-register-schedule-description">
                                <Form.Label>방송 상세 설명</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="manual-register-schedule-date">
                                <Form.Label>방송 시간</Form.Label>
                                <Form.Control type="datetime-local" />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="outline-danger" onClick={onCancel}>취소</Button>
                            <Button variant="primary" type="submit" onClick={onSubmitManual}>저장</Button>
                        </Modal.Footer>
                    </Form>
                </Tab>
                <Tab eventKey="excel" title="엑셀 입력">
                    <Form id="excel-register-schedule">
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="excel-register-schedule-banner-file">
                                <Form.Label>엑셀 파일</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="outline-danger" onClick={onCancel}>취소</Button>
                            <Button variant="primary" type="submit" onClick={onSubmitExcel}>저장</Button>
                        </Modal.Footer>
                    </Form>
                </Tab>
            </Tabs>
        </Modal>
    );
}
