import { FormControl, InputLabel, MenuItem, Select, TextField, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './searchStyles';
import _ from 'lodash';
import { RepositoryStore, StoreModel } from '../../../../api-interfaces';
import { CustomButton } from '../../../../utillities/customLink/CustomButton';
import { TRY_FETCH_REPOSITORIES } from '../../../../redux/repositories/types';

export const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { page, total_count, search, limitPerPage } = useSelector<StoreModel, RepositoryStore>(
        (state) => state.repositories,
    );
    const [text, setText] = useState<string | undefined>(search);
    useEffect(() => {
        // if (text.length === 0) dispatch({ type: TRY_SET_CONTRIBUTORS, payload: data });
    }, [text]);

    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: TRY_FETCH_REPOSITORIES, payload: { search: text, page, limitPerPage } });
    };

    return (
        <>
            {!total_count && (
                <Typography variant="h6" className="font-white mb-3">
                    Search for incredible repositories
                </Typography>
            )}
            <form className={classes.search} onSubmit={onSearch}>
                <TextField
                    id="outlined-search"
                    label="Search"
                    name="search"
                    value={text}
                    onChange={({ target }) => setText(target.value)}
                    variant="outlined"
                    fullWidth
                    className={`${classes.white} mr-3`}
                />
                <CustomButton label="Search" />
            </form>
        </>
    );
};
