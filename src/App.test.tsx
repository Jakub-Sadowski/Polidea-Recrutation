import React from 'react';
import { render } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App component', () => {
    it('renders app', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AppProviders>
                    <App />
                </AppProviders>
            </Provider>,
        );
        expect(getByText("Find repository you're looking for")).toBeInTheDocument();
    });
});
