import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RepositoryStore, StoreModel } from '../../../api-interfaces';
import { SearchBar } from './searchBar/SearchBar';
import Pagination from '@material-ui/lab/Pagination';
import { TRY_FETCH_REPOSITORIES } from '../../../redux/repositories/types';

export const List = () => {
    const dispatch = useDispatch();
    const { page, list, total_count, search, limitPerPage } = useSelector<StoreModel, RepositoryStore>(
        (state) => state.repositories,
    );
    const [pageCount, setPageCount] = useState(1);
    const maxPages = total_count !== undefined ? Math.round(total_count / limitPerPage) : 10;

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageCount(value);
        dispatch({ type: TRY_FETCH_REPOSITORIES, payload: { page: value, search, limitPerPage } });
    };

    return (
        <Box>
            <SearchBar />
            <Box className="mt-5 restricted">
                {list.map((repo, index) => (
                    <div>{repo.name}</div>
                ))}
                {total_count && (
                    <Pagination
                        page={pageCount}
                        onChange={handlePageChange}
                        count={maxPages}
                        variant="text"
                        shape="rounded"
                        size="large"
                        className="mt-5 center-content direction-column pagination"
                    />
                )}
            </Box>
        </Box>
    );
};
