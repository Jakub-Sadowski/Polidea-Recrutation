import React from 'react';
import './app.scss';
import { CssBaseline } from '@material-ui/core';
import { AppRoutes } from './routing/AppRoutes';

export const App = () => {
    return (
        <div className="background">
            <div className="restricted">
                <CssBaseline />
                <AppRoutes />
            </div>
        </div>
    );
};
