export function displayISOString(iso8601: string): string {
    const date = new Date(iso8601);

    const year = date.getFullYear();

    const month = date.getMonth() + 1;

    const day = date.getDate();

    const ampm = date.getHours() >= 12 ? "오후" : "오전";

    let hours = date.getHours() % 12;
    hours = hours ? hours : 12;

    const minutes = date.getMinutes();
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}시 ${strMinutes}분`;
}

export function toISOString(dateString: string): string {
    return new Date(dateString).toISOString();
}
