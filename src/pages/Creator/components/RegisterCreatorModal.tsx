import { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';
import { input } from '@/utils/getElementById';
import { PlatformName } from '@/types';

export function RegisterCreatorModal(props: {show: boolean, handleClose: () => void}) {
    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        apiCall.registerCreator({
            profile: (input("register-creator-profile-image").files as FileList)[0],
            creatorInfo: {
                name: input("register-creator-name").value,
                platforms: [
                    { 
                        platform : PlatformName.Afreeca,
                        broadcastLink: input("register-creator-africa-url").value,
                    },
                    { 
                        platform : PlatformName.Twitch,
                        broadcastLink: input("register-creator-twitch-url").value,
                    },
                    { 
                        platform : PlatformName.YouTube,
                        broadcastLink: input("register-creator-youtube-url").value,
                    },
                ],
            },
        }).then(() => {
            alert("등록되었습니다.");
        }).catch((err) => {
            alert("등록에 실패하였습니다.");
        }).finally(() => {
            props.handleClose();
        });
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>크리에이터 추가</Modal.Title>
            </Modal.Header>

            <Form id="register-creator">
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="register-creator-profile-image">
                        <Form.Label>프로필 이미지</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-creator-name">
                        <Form.Label>크리에이터 이름</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-creator-youtube-url">
                        <Form.Label>유튜브 채널 링크</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-creator-twitch-url">
                        <Form.Label>트위치 방송국 링크</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="register-creator-africa-url">
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
