import { Action } from '../../api-interfaces';
import { ResponseModel } from '../../api-interfaces/repositories';
import { FETCH_REPOSITORIES, FETCH_REPOSITORY } from './types';

export const getRepositories = (data: ResponseModel): Action<ResponseModel> => ({
    type: FETCH_REPOSITORIES,
    payload: data,
});
export const getRepository = (data: ResponseModel): Action<ResponseModel> => ({
    type: FETCH_REPOSITORY,
    payload: data,
});
