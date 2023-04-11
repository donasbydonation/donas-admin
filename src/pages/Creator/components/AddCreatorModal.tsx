import { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as apiCall from '../api';

export function AddCreatorModal(props: {show: boolean, handleClose: () => void}) {
    const byId = (id: string) => (document.getElementById(id) as HTMLInputElement);

    const onCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.handleClose();
    };

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        const profileImage = (byId("add-creator-profile-image").files as FileList)[0];
        const name = (byId("add-creator-name").value);
        const youtubeURL = (byId("add-creator-youtube-url").value);
        const twitchURL = (byId("add-creator-twitch-url").value);
        const africaURL = (byId("add-creator-africa-url").value);

        apiCall.addCreator(profileImage, name, youtubeURL, twitchURL, africaURL).then(() => {
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

            <Form id="add-creator">
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="add-creator-profile-image">
                        <Form.Label>프로필 이미지</Form.Label>
                        <Form.Control type="file" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="add-creator-name">
                        <Form.Label>크리에이터 이름</Form.Label>
                        <Form.Control type="url" placeholder="Creator name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="add-creator-youtube-url">
                        <Form.Label>유튜브 채널 링크</Form.Label>
                        <Form.Control type="url" placeholder="YouTube URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="add-creator-twitch-url">
                        <Form.Label>트위치 방송국 링크</Form.Label>
                        <Form.Control type="url" placeholder="Twitch URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="add-creator-africa-url">
                        <Form.Label>아프리카 방송국 링크</Form.Label>
                        <Form.Control type="url" placeholder="Africa URL" />
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
