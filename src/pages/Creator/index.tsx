import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from "react-router-dom";
import { CreatorInfo } from '@/types';
import { PaginationItem } from '@/components';
import { TableData, RegisterCreatorModal } from './components';
import * as apiCall from './api';

export default function Creator() {
    const [creators, setCreators] = useState<Array<CreatorInfo>>([]);
    const [pages, setPages] = useState<Array<number>>([]);
    const [searchParams] = useSearchParams();

    const onPageChanged = () => {
        apiCall.getCreators(searchParams.get("page")).then(body => {
            setPages(Array.from({length: body.totalPage}, (_, i) => i + 1));
            setCreators(body.creatorInfos.map(apiCall.creatorInfoShim));
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onPageChanged, [searchParams]);

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <>
            <RegisterCreatorModal show={modalShow} handleClose={handleModalClose} />
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
                            <th style={{ width: "6%" }}>등록 번호</th>
                            <th style={{ width: "8%" }}>프로필 이미지</th>
                            <th style={{ width: "10%" }}>크리에이터 이름</th>
                            <th style={{ width: "22%" }}>유튜브 채널 링크</th>
                            <th style={{ width: "22%" }}>트위치 방송국 링크</th>
                            <th style={{ width: "22%" }}>아프리카 방송국 링크</th>
                            <th style={{ width: "10%" }}>수정 / 삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {creators.map((creator, idx) => (
                            <TableData
                                id={creator.id}
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
