import { Reducer } from 'redux';
import { Action, ContributorModel, ContributorStoreModel } from '../../api-interfaces';
import { FETCH_CONTRIBUTORS, SET_CONTRIBUTORS, UPDATE_CONTRIBUTORS } from './types';

const initialState = {
    list: [],
    data: [],
};
export const contributors: Reducer<ContributorStoreModel, Action<ContributorModel[]>> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case FETCH_CONTRIBUTORS: {
            return { data: action.payload, list: action.payload };
        }
        case SET_CONTRIBUTORS: {
            return { ...state, list: action.payload };
        }
        case UPDATE_CONTRIBUTORS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
