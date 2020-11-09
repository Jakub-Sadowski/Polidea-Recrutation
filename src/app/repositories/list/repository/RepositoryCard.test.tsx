import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { AppProviders } from '../../../../providers/AppProviders';
import { RepositoryCard } from './RepositoryCard';
import { UserModel } from '../../../../api-interfaces';

describe('Repository card component', () => {
    const name = 'Repo name';
    const owner: UserModel = {
        login: 'Repo owner',
        avatar_url: '/',
        id: 12,
    };
    const language = 'C';
    const id = 1;
    const stargazers_count = 10;
    it('renders RepositoryCard', () => {
        const { getByText } = render(
            <AppProviders>
                <RepositoryCard
                    name={name}
                    owner={owner}
                    id={id}
                    language={language}
                    stargazers_count={stargazers_count}
                />
            </AppProviders>,
        );
        expect(getByText(name)).toBeInTheDocument();
        expect(getByText(owner.login)).toBeInTheDocument();
        expect(getByText(language)).toBeInTheDocument();
        expect(getByText('10')).toBeInTheDocument();
    });
    it('RepositoryCard redirect on click', () => {
        const { getByText } = render(
            <AppProviders>
                <RepositoryCard
                    name={name}
                    owner={owner}
                    id={id}
                    language={language}
                    stargazers_count={stargazers_count}
                />
            </AppProviders>,
        );
        expect(getByText(name)).toBeInTheDocument();
        fireEvent.click(getByText(name));
        expect(window.location.href).toBe(`http://localhost/repository/${id}`);
    });
});
