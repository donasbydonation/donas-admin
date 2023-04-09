import { MouseEventHandler } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from "react-router-dom";

export function PaginationItem(props: { page: number }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const onClick: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();
        setSearchParams({page: `${props.page}`});
    };

    return(
        <Pagination.Item
            key={props.page}
            active={`${props.page}` === (searchParams.get("page") || "1")}
            onClick={onClick}
        >
            {props.page}
        </Pagination.Item>
    );
}
