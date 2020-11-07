import { Action as ReduxAction } from 'redux';
import { ContributorModel, FollowerModel, RepositoryModel } from './contributors';
export interface Action<T> extends ReduxAction {
    payload: T;
}

export interface ApiRequest {
    path: string;
}
export interface StoreModel {
    contributors: ContributorStoreModel;
}

export interface ContributorStoreModel {
    data: ContributorModel[];
    list: ContributorModel[];
}
interface GraphResponse<T> {
    edges: T[];
}

export interface GraphModel {
    data: {
        node: {
            id: string;
            login: string;
            avatarUrl: string;
            bio: string;
            followers?: GraphResponse<FollowerModel>;
            repositories?: GraphResponse<RepositoryModel>;
            gists?: GraphResponse<RepositoryModel>;
        };
    };
}
export interface RepositoryResponseModel {
    data: RepositoryModel;
}
