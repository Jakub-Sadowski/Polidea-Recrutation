import { Avatar, Box, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './repository.scss';
import { UserModel } from '../../../../api-interfaces';
import { SelectedIcon } from '../../../../utillities/icon/SelectedIcon';

type RepositoryCardProps = {
    name: string;
    owner: UserModel;
    id: number;
    language: string;
    stargazers_count: number;
};

export const RepositoryCard: FC<RepositoryCardProps> = ({ name, owner, language, stargazers_count, id }) => {
    return (
        <Link to={`/repository/${id}`} key={id}>
            <Paper elevation={3} className="user-card mt-3">
                <Box className="user-card__title mb-3">
                    <Typography variant="h4">{name}</Typography>
                    <Box className="user-card__owner">
                        <Avatar className="user-card__owner mr-2" alt={owner.login} src={owner.avatar_url} />
                        <Typography variant="h6">{owner.login}</Typography>
                    </Box>
                </Box>
                <Box className="user-card__owner mb-3">
                    <Typography variant="h5" className="mr-3">
                        Language:
                    </Typography>
                    <Typography variant="h6" className="mr-2">
                        {language}
                    </Typography>
                    <SelectedIcon icon={language} />
                </Box>
                <Box className="user-card__owner">
                    <Typography variant="h5" className="mr-3">
                        Stargazers:
                    </Typography>
                    <Typography variant="h6" className="mr-2">
                        {stargazers_count}
                    </Typography>
                    <SelectedIcon icon="stargazer" />
                </Box>
            </Paper>
        </Link>
    );
};
