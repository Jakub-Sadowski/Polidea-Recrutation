import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CustomButton } from './CustomButton';
import { CustomLink } from './CustomLink';
import { AppProviders } from '../../providers/AppProviders';
import { AppRoute } from '../../routing/AppRoute.enum';

describe('Custom button component', () => {
    it('renders button element', () => {
        const label = 'BUTTON';
        const { getByText } = render(<CustomButton label={label} />);
        expect(getByText(label)).toBeInTheDocument();
    });
});

describe('Custom link component', () => {
    it('renders link element', () => {
        const label = 'LINK';
        const { getByText } = render(
            <AppProviders>
                <CustomLink label={label} destination="/" />
            </AppProviders>,
        );
        expect(getByText(label)).toBeInTheDocument();
    });
    it('getting to destination site by click on link element', () => {
        const label = 'LINK';
        const { getByText } = render(
            <AppProviders>
                <CustomLink label={label} destination={AppRoute.repositories} />
            </AppProviders>,
        );
        expect(getByText(label)).toBeInTheDocument();
        fireEvent.click(getByText(label));
        expect(window.location.href).toBe(`http://localhost${AppRoute.repositories}`);
    });
});
