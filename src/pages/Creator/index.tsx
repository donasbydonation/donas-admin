import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenState';
import { useSearchParams } from "react-router-dom";
import { TableData, TableDataProps, PaginationItem } from './components';
import * as apiCall from './api';

function AddingCreatorModal(props: {show: boolean, handleClose: () => void}) {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default function Creator() {
    const [token] = useRecoilState(tokenState);
    const [creators, setCreators] = useState<Array<TableDataProps>>([]);
    const [pages, setPages] = useState<Array<number>>([]);
    const [searchParams] = useSearchParams();
    const [modalShow, setModalShow] = useState(false);

    const onPageChanged = () => {
        const currentPage = searchParams.get("page") || "1";
        apiCall.getCreators(token.access, currentPage).then(body => {
            setPages(Array.from({length: body.totalPages}, (_, i) => i + 1));
            setCreators(body.content);
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onPageChanged, [searchParams]);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <>
            <AddingCreatorModal show={modalShow} handleClose={handleModalClose} />
            <Card.Body>
                <Card.Title>크리에이터 관리</Card.Title>
                <div className="mb-3 d-flex justify-content-between">
                    <Pagination className="mb-0">
                        {pages.map((page, idx) => (
                            <PaginationItem key={idx} page={page} />
                        ))}
                    </Pagination>
                    <Button variant="primary" onClick={handleModalShow}>크리에이터 추가</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>프로필 이미지</th>
                            <th>크리에이터 이름</th>
                            <th>유튜브 채널 링크</th>
                            <th>트위치 방송국 링크</th>
                            <th>아프리카 방송국 링크</th>
                        </tr>
                    </thead>
                    <tbody>
                        {creators.map((creator, idx) => (
                            <TableData
                                profileImage={creator.profileImage}
                                name={creator.name}
                                youtubeURL={creator.youtubeURL}
                                twitchURL={creator.twitchURL}
                                africaURL={creator.africaURL}
                                key={idx}
                            />
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </>
    );
}
