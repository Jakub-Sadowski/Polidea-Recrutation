import { ContributorModel, Action } from '../../api-interfaces';
import { FETCH_CONTRIBUTORS, SET_CONTRIBUTORS, UPDATE_CONTRIBUTORS } from './types';

export const getContributors = (contributors: ContributorModel[]): Action<ContributorModel[]> => ({
    type: FETCH_CONTRIBUTORS,
    payload: contributors,
});

export const setContributors = (contributors: ContributorModel[]): Action<ContributorModel[]> => ({
    type: SET_CONTRIBUTORS,
    payload: contributors,
});

export const updateContributors = (contributors: ContributorModel[]): Action<ContributorModel[]> => ({
    type: UPDATE_CONTRIBUTORS,
    payload: contributors,
});
