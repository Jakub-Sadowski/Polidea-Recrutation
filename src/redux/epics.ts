import { combineEpics } from 'redux-observable';
import { getContributorsEpic, setContributorsEpic, updateContributorsEpic } from './contributors/epic';

export const rootEpic = combineEpics(getContributorsEpic, setContributorsEpic, updateContributorsEpic);
