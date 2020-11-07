import { combineReducers } from 'redux';
import { repositories } from './repositories/reducer';

export const rootReducer = combineReducers({ repositories });
