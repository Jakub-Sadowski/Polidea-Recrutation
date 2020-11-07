import { ActionsObservable, ofType } from 'redux-observable';
import { fetchData } from '../../api';
import { Action, ApiRequest, ContributorModel } from '../../api-interfaces';
import { getContributors, setContributors, updateContributors } from './actions';
import { TRY_FETCH_CONTRIBUTORS, TRY_SET_CONTRIBUTORS, TRY_UPDATE_CONTRIBUTORS } from './types';
import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

export const getContributorsEpic = (action$: ActionsObservable<Action<ApiRequest>>) =>
    action$.pipe(
        ofType(TRY_FETCH_CONTRIBUTORS),
        mergeMap(() =>
            from(
                fetchData<ContributorModel[]>({ path: 'repos/angular/angular/contributors' }),
            ).pipe(map((response: ContributorModel[]) => getContributors(response))),
        ),
    );

export const setContributorsEpic = (action$: ActionsObservable<Action<ContributorModel[]>>) =>
    action$.pipe(
        ofType(TRY_SET_CONTRIBUTORS),
        map((action: Action<ContributorModel[]>) => setContributors(action.payload)),
    );

export const updateContributorsEpic = (action$: ActionsObservable<Action<ContributorModel[]>>) =>
    action$.pipe(
        ofType(TRY_UPDATE_CONTRIBUTORS),
        map((action: Action<ContributorModel[]>) => updateContributors(action.payload)),
    );
