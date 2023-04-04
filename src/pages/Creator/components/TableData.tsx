import Image from 'react-bootstrap/Image'

export type TableDataProps = {
    profileImage: string,
    name: string,
    youtubeURL: string,
    twitchURL: string,
    africaURL: string,
}

export function TableData(props: TableDataProps) {
    return (
        <tr>
            <td>
                <Image
                    src={props.profileImage}
                    width={64}
                    height={64}
                    roundedCircle
                />
            </td>
            <td>{props.name}</td>
            <td>
                <a href={props.youtubeURL} target="_blank" rel="noreferrer">
                    {props.youtubeURL}
                </a>
            </td>
            <td>
                <a href={props.twitchURL} target="_blank" rel="noreferrer">
                    {props.twitchURL}
                 </a>
            </td>
            <td>
                <a href={props.africaURL} target="_blank" rel="noreferrer">
                    {props.africaURL}
                </a>
            </td>
        </tr>
    );
}
