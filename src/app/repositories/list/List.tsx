import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RepositoryStore, StoreModel } from '../../../api-interfaces';
import { SearchBar } from './searchBar/SearchBar';
import Pagination from '@material-ui/lab/Pagination';
import { TRY_FETCH_REPOSITORIES } from '../../../redux/repositories/types';
import { RepositoryCard } from './repository/RepositoryCard';

export const List = () => {
    const dispatch = useDispatch();
    const { page, list, total_count, search, limitPerPage } = useSelector<StoreModel, RepositoryStore>(
        (state) => state.repositories,
    );
    const [pageCount, setPageCount] = useState<number>(1);
    const maxPages = total_count !== undefined ? Math.floor(1000 / limitPerPage) : 10; // api is giving access only to first 1000 records
    useEffect(() => {
        if (page !== undefined) setPageCount(page);
    }, [page]);
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch({ type: TRY_FETCH_REPOSITORIES, payload: { page: value, search, limitPerPage } });
    };

    return (
        <Box>
            <SearchBar />
            <Box className="mt-5 restricted">
                {list.map((repo) => (
                    <RepositoryCard key={repo.id} {...repo} />
                ))}
                {total_count !== undefined && total_count !== 0 ? (
                    <Pagination
                        page={pageCount}
                        onChange={handlePageChange}
                        count={maxPages}
                        variant="text"
                        shape="rounded"
                        size="large"
                        className="mt-5 center-content direction-column pagination"
                    />
                ) : null}
            </Box>
        </Box>
    );
};
