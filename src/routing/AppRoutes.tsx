import { Box } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../app/homepage/HomePage';
import { Navbar } from '../utillities/navbar/Navbar';
import '../app.scss';
import { AppRoute } from './AppRoute.enum';
import { List } from '../app/repositories/list/List';
import { RepositoryDetails } from '../app/repositories/details/RepositoryDetails';

export const AppRoutes = () => {
    return (
        <Box>
            <Navbar />
            <Box className="container">
                <Switch>
                    <Route path={AppRoute.home} exact component={HomePage} />
                    <Route path={AppRoute.repositories} exact component={List} />
                    <Route path={AppRoute.repository} exact component={RepositoryDetails} />
                    <Redirect to={AppRoute.home} />
                </Switch>
            </Box>
        </Box>
    );
};
