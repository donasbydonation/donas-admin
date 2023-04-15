import Image from 'react-bootstrap/Image'
import { ScheduleInfo } from '@/types';

export type TableDataProps = ScheduleInfo;

function parseIso8601(iso8601: string): string {
    const date = new Date(iso8601);

    const year = date.getFullYear();

    const month = date.getMonth() + 1;

    const day = date.getDate();

    const ampm = date.getHours() >= 12 ? "오후" : "오전";

    let hours = date.getHours() % 12;
    hours = hours ? hours : 12;

    const minutes = date.getMinutes();
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}시 ${strMinutes}분`;
}

export function TableData(props: TableDataProps) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.creator.name}</td>
            <td>
                <Image
                    src={props.bannerImage as string}
                    width={128}
                    height={64}
                    rounded
                />
            </td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{parseIso8601(props.datetime)}</td>
        </tr>
    );
}
