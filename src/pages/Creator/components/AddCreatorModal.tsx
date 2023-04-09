// import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useRecoilState } from 'recoil';
// import { tokenState } from '@/atoms/tokenState';
// import { useSearchParams } from "react-router-dom";
// import * as apiCall from './api';

export function AddCreatorModal(props: {show: boolean, handleClose: () => void}) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>크리에이터 추가</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.handleClose}>취소</Button>
                <Button variant="primary" onClick={props.handleClose}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
}
