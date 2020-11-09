import React from 'react';
import { render } from '@testing-library/react';
import { AppProviders } from '../../providers/AppProviders';
import { HomePage } from './HomePage';

describe('HomePage component', () => {
    it('renders HomePage', () => {
        const text =
            'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.';
        const { getByText } = render(
            <AppProviders>
                <HomePage />
            </AppProviders>,
        );
        expect(getByText(text)).toBeInTheDocument();
    });
});
