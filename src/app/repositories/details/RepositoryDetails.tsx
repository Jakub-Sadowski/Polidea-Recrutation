import { Avatar, Box, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../../api';
import { LanguagesModel, RepositoryModel, RepositoryStore, StoreModel, UserModel } from '../../../api-interfaces';
import { TRY_FETCH_REPOSITORY } from '../../../redux/repositories/types';
import { SelectedIcon } from '../../../utillities/icon/SelectedIcon';
import { useDetailsStyles } from './details';

export const RepositoryDetails = () => {
    const dispatch = useDispatch();
    const detailsClasses = useDetailsStyles();
    const { id } = useParams<{ id: string }>();
    const { list } = useSelector<StoreModel, RepositoryStore>((state) => state.repositories);
    const [repo, setRepo] = useState<RepositoryModel>();
    const [contributors, setContributors] = useState<UserModel[]>();
    const [stargazers, setStarGazers] = useState<UserModel[]>();
    const [languages, setLanguages] = useState<Array<string[]>>();
    useEffect(() => {
        dispatch({ type: TRY_FETCH_REPOSITORY, payload: { id } });
    }, [id]);

    useEffect(() => {
        const repository = list.find((el) => el.id === parseInt(id));
        setRepo(repository);
        if (repository) {
            fetchData<UserModel[]>({ path: repository.contributors_url }).then((response) => setContributors(response));
            fetchData<UserModel[]>({ path: repository.stargazers_url }).then((response) => setStarGazers(response));
            fetchData<LanguagesModel>({ path: repository.languages_url }).then((response) =>
                setLanguages(Object.entries(response)),
            );
        }
    }, [list]);

    return (
        <Paper className={detailsClasses.detailsCard}>
            <Box className="restricted">
                <Box className={detailsClasses.header}>
                    <Typography variant="h2">{repo?.full_name}</Typography>
                    <Box className="user-card__owner">
                        <Avatar
                            className="user-card__owner mr-2"
                            alt={repo?.owner.login}
                            src={repo?.owner.avatar_url}
                        />
                        <Typography variant="h6">{repo?.owner.login}</Typography>
                    </Box>
                </Box>
                <Box className="mb-5">
                    <Typography variant="h6">Description:</Typography>
                    <Typography variant="body1">{repo?.description}</Typography>
                </Box>
                <Box className="mb-5">
                    <Typography variant="h6">List of used languages:</Typography>
                    <List className={detailsClasses.list}>
                        {languages?.map((el) => (
                            <Box className={detailsClasses.repo} key={`${el[0]}-${el[1]}`}>
                                <ListItem>
                                    <SelectedIcon icon={el[0]} />
                                    <ListItemText primary={`${el[0]} - ${el[1]}`} />
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                </Box>
                <Box className="mb-5">
                    <Typography variant="h6">List of stargazers ({repo?.stargazers_count}):</Typography>
                    <List className={detailsClasses.list}>
                        {stargazers?.map((el) => (
                            <Box className={detailsClasses.repo} key={el.id}>
                                <ListItem>
                                    <Avatar alt={el.login} src={el.avatar_url} className="mr-3" />
                                    <ListItemText primary={el.login} />
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                </Box>
                <Box className="mb-5">
                    <Typography variant="h6">List of contributors ({contributors?.length}):</Typography>
                    <List className={detailsClasses.list}>
                        {contributors?.map((el) => (
                            <Box className={detailsClasses.repo} key={el.id}>
                                <ListItem>
                                    <Avatar alt={el.login} src={el.avatar_url} className="mr-3" />
                                    <ListItemText primary={el.login} />
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                </Box>
                <Box className={`${detailsClasses.textCenter} mb-5`}>
                    <a className={detailsClasses.button} href={repo?.html_url}>
                        Get this repo
                    </a>
                </Box>
            </Box>
        </Paper>
    );
};
