import { Box, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/Octocat.png';
import { AppRoute } from '../../routing/AppRoute.enum';
import { CustomLink } from '../../utillities/customLink/CustomLink';

export const HomePage = () => {
    return (
        <Box className="center-content h-100 direction-column">
            <img className="image" alt="angular" src={logo} />
            <Typography variant="h6" className="font-white mb-3">
                GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command
                line tool, GitHub provides a Web-based graphical interface. It also provides access control and several
                collaboration features, such as a wikis and basic task management tools for every project.
            </Typography>
            <CustomLink label="Find repository you're looking for" destination={AppRoute.repositories} />
        </Box>
    );
};
