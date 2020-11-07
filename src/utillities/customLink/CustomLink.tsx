import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

export type CustomLinkProps = {
    label: string;
    destination: string;
};
export const CustomLink: FC<CustomLinkProps> = ({ label, destination }) => {
    return (
        <Link className="button button__home" to={destination}>
            {label}
        </Link>
    );
};
