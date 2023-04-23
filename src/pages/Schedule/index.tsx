import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from "react-router-dom";
import { ScheduleInfo } from '@/types';
import { PaginationItem } from '@/components';
import { TableData, RegisterScheduleModal } from './components';
import * as apiCall from './api';

export default function Schedule() {
    const [schedules, setSchedules] = useState<Array<ScheduleInfo>>([]);
    const [pages, setPages] = useState<Array<number>>([]);
    const [searchParams] = useSearchParams();

    const onPageChanged = () => {
        apiCall.getSchedules(searchParams.get("page")).then(body => {
            setPages(Array.from({length: body.totalPage}, (_, i) => i + 1));
            setSchedules(body.schedules.map(apiCall.scheduleInfoShim));
        }).catch(() => {
            alert("스케줄 조회에 실패했습니다.");
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onPageChanged, [searchParams]);

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <>
            <RegisterScheduleModal show={modalShow} handleClose={handleModalClose} />
            <Card.Body>
                <Card.Title>방송 스케줄 관리</Card.Title>
                <div className="mb-3 d-flex justify-content-between">
                    <Pagination className="mb-0">
                        {pages.map((page, idx) => (
                            <PaginationItem key={idx} page={page} />
                        ))}
                    </Pagination>
                    <Button variant="primary" onClick={handleModalShow}>스케줄 추가</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: "6%" }}>등록 번호</th>
                            <th style={{ width: "10%" }}>크리에이터 이름</th>
                            <th style={{ width: "14%" }}>방송 배너 이미지</th>
                            <th style={{ width: "20%" }}>방송 제목</th>
                            <th style={{ width: "20%" }}>방송 상세 설명</th>
                            <th style={{ width: "20%" }}>방송 시간</th>
                            <th style={{ width: "10%" }}>수정 / 삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule, idx) => (
                            <TableData
                                id={schedule.id}
                                bannerImage={schedule.bannerImage}
                                name={schedule.name}
                                creator={schedule.creator}
                                description={schedule.description}
                                datetime={schedule.datetime}
                                key={idx}
                            />
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </>
    );
}
