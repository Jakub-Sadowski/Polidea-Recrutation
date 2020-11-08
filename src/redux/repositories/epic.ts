import { ActionsObservable, ofType } from 'redux-observable';
import { fetchData } from '../../api';
import { Action, ApiRequest } from '../../api-interfaces';
import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { RepositoryModel, ResponseModel } from '../../api-interfaces/repositories';
import { TRY_FETCH_REPOSITORIES, TRY_FETCH_REPOSITORY } from './types';
import { getRepositories, getRepository } from './actions';

export const getRepositoriesEpic = (action$: ActionsObservable<Action<ApiRequest>>) =>
    action$.pipe(
        ofType(TRY_FETCH_REPOSITORIES),
        mergeMap((action) =>
            from(
                fetchData<ResponseModel>({
                    path: `search/repositories?q=${action.payload.search}&page=${action.payload.page}&per_page=${action.payload.limitPerPage}`,
                }),
            ).pipe(
                map((response) =>
                    getRepositories({ ...response, page: action.payload.page, search: action.payload.search }),
                ),
            ),
        ),
    );

export const getRepositoryEpic = (action$: ActionsObservable<Action<ApiRequest>>) =>
    action$.pipe(
        ofType(TRY_FETCH_REPOSITORY),
        mergeMap((action) =>
            from(
                fetchData<RepositoryModel>({
                    path: `repositories/${action.payload.id}`,
                }),
            ).pipe(map((response) => getRepository({ items: [response] }))),
        ),
    );
