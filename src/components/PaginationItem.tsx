import { MouseEventHandler } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from "react-router-dom";

export function PaginationItem(props: { page: number }) {
    const DEFAULT_PAGE = "1";
    const [searchParams, setSearchParams] = useSearchParams();

    const onClick: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();
        setSearchParams({page: `${props.page}`});
    };

    return(
        <Pagination.Item
            key={props.page}
            active={`${props.page}` === (searchParams.get("page") || DEFAULT_PAGE)}
            onClick={onClick}
        >
            {props.page}
        </Pagination.Item>
    );
}
