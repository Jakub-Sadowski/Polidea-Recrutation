import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute.enum';
import logo from '../../assets/Octocat.png';
import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={AppRoute.home}>
                <img className="logo" alt="angular" src={logo} />
            </Link>
        </div>
    );
};
