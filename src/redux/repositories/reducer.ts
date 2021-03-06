import { Reducer } from 'redux';
import { Action, RepositoryStore } from '../../api-interfaces';
import { ResponseModel } from '../../api-interfaces/repositories';
import { FETCH_REPOSITORIES, FETCH_REPOSITORY } from './types';

const initialState = {
    list: [],
    page: undefined,
    total_count: undefined,
    search: undefined,
    limitPerPage: 4,
};
export const repositories: Reducer<RepositoryStore, Action<ResponseModel>> = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOSITORIES: {
            return {
                list: action.payload.items,
                page: action.payload.page,
                total_count: action.payload.total_count,
                search: action.payload.search,
                limitPerPage: state.limitPerPage,
            };
        }
        case FETCH_REPOSITORY: {
            const el = state.list.find((repo) => repo.id === action.payload.items[0].id);

            if (el === undefined) {
                return {
                    ...state,
                    list: [...state.list, ...action.payload.items],
                };
            } else {
                const id = state.list.indexOf(el);
                console.log(id);
                const arr = state.list;
                arr[id] = action.payload.items[0];
                return {
                    ...state,
                    list: arr,
                };
            }
        }
        default:
            return state;
    }
};
