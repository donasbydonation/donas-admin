import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'

const TMP_DUMMY_DATA = {};

function TableData() {
    return (
        <tr>
            <td>
                <Image
                    src="https://yt3.googleusercontent.com/5O_8Px4SI2tD0mMppzZoApw53qy1R-8DUfvdxgNMDQsfnkG2S5cNTDJsWQckrQTuKnbZbw4yYg=s176-c-k-c0x00ffffff-no-rj"
                    width={64}
                    height={64}
                    roundedCircle
                />
            </td>
            <td>송선생</td>
            <td>https://www.youtube.com/@S_YW</td>
            <td>https://www.twitch.tv/thdduddns98</td>
            <td></td>
        </tr>
    );
}

export default function Creator() {
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
                            <TableData />
                        </tbody>
                    </Table>
            </Card.Body>
        </>
    );
}
