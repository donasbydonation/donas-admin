import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenState';
import { TableData, TableDataProps } from './components';
import * as apiCall from './api';

export default function Creator() {
    const [token] = useRecoilState(tokenState);
    const [creators, setCreators] = useState<Array<TableDataProps>>([]);
    const onMount = () => {
        apiCall.getCreators(token.access).then(body => {
            setCreators(body);
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onMount, [])

    return (
        <>
            <Card.Body>
                <Card.Title>크리에이터 관리</Card.Title>
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
