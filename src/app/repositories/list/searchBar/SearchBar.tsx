import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './searchStyles';
import { RepositoryStore, StoreModel } from '../../../../api-interfaces';
import { CustomButton } from '../../../../utillities/customLink/CustomButton';
import { TRY_FETCH_REPOSITORIES } from '../../../../redux/repositories/types';
import RefreshIcon from '@material-ui/icons/Refresh';

export const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { page, total_count, search, limitPerPage } = useSelector<StoreModel, RepositoryStore>(
        (state) => state.repositories,
    );
    const [text, setText] = useState<string>('');

    useEffect(() => {
        // if (text.length === 0) dispatch({ type: TRY_SET_CONTRIBUTORS, payload: data });
        if (search !== undefined) setText(search);
    }, [search]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: TRY_FETCH_REPOSITORIES, payload: { search: text, page, limitPerPage } });
    };

    const onSearch = () => {
        dispatch({ type: TRY_FETCH_REPOSITORIES, payload: { search: text, page, limitPerPage } });
    };

    return (
        <>
            {!total_count && (
                <Typography variant="h6" className="font-white mb-3">
                    Search for incredible repositories
                </Typography>
            )}
            <form className={classes.search} onSubmit={onSubmit} autoComplete="off">
                <FormControl className={`${classes.white} mr-3`} fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-search">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-search"
                        type="text"
                        value={text}
                        required
                        fullWidth
                        onChange={({ target }) => setText(target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    className={classes.white}
                                    aria-label="toggle refresh search"
                                    onClick={onSearch}
                                    edge="end"
                                >
                                    <RefreshIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <CustomButton label="Search" />
            </form>
            {total_count === 0 && (
                <Typography variant="h6" className="font-white mb-3">
                    We found nothing :(
                </Typography>
            )}
        </>
    );
};
