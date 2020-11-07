import { Action as ReduxAction } from 'redux';
import { RepositoryModel } from './repositories';
export interface Action<T> extends ReduxAction {
    payload: T;
}

export interface ApiRequest {
    search?: string;
    page?: number;
    limitPerPage?: number;
    id?: number;
}
export interface StoreModel {
    repositories: RepositoryStore;
}

export interface RepositoryStore {
    page: number | undefined;
    list: RepositoryModel[];
    total_count: number | undefined;
    search: string | undefined;
    limitPerPage: number;
}
