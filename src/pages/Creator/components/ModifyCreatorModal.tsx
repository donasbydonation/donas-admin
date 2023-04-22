import { MouseEventHandler } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';

export function ModifyCreatorModal(props: {
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
        apiCall.modifyCreator(
            {
                profile: (input("modify-creator-profile-image").files as FileList)[0],
                creatorInfo: {
                    id: props.id,
                    name: input("modify-creator-name").value,
                    platforms: [
                        {
                            platform : "afreecatv",
                            broadcastLink: input("modify-creator-africa-url").value,
                        },
                        {
                            platform : "twitch",
                            broadcastLink: input("modify-creator-twitch-url").value,
                        },
                        {
                            platform : "youtube",
                            broadcastLink: input("modify-creator-youtube-url").value,
                        },
                    ],
                },
            },
        ).then(() => {
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
                <Modal.Title>크리에이터 수정</Modal.Title>
            </Modal.Header>

            <Form id="modify-creator">
                <Modal.Body>
                    <Alert variant="danger">
                        [주의!]
                        크리에이터가 부분적으로 변경되는 것이 아닌
                        기존의 크리에이터가 덮어씌여집니다. 
                        변경하고 싶지 않은 값은 기존의 것을 복사/붙여넣기 해주세요.
                    </Alert>
                    <Form.Group className="mb-3" controlId="modify-creator-profile-image">
                        <Form.Label>프로필 이미지</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-creator-name">
                        <Form.Label>크리에이터 이름</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-creator-youtube-url">
                        <Form.Label>유튜브 채널 링크</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-creator-twitch-url">
                        <Form.Label>트위치 방송국 링크</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modify-creator-africa-url">
                        <Form.Label>아프리카 방송국 링크</Form.Label>
                        <Form.Control type="url" />
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
