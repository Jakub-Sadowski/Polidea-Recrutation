import { combineEpics } from 'redux-observable';
import { getRepositoriesEpic, getRepositoryEpic } from './repositories/epic';

export const rootEpic = combineEpics(getRepositoriesEpic, getRepositoryEpic);
