import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('Search component', () => {
    it('renders search component', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <SearchBar />
            </Provider>,
        );
        expect(getByLabelText('Search')).toBeInTheDocument();
    });
    it('displays proper value', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <SearchBar />
            </Provider>,
        );
        const search = getByLabelText('Search');
        expect(search).toBeInTheDocument();
        fireEvent.change(search, { target: { value: 'phrase' } });
        expect(search).toHaveValue('phrase');
    });
});
