import { combineReducers } from 'redux';
import { contributors } from './contributors/reducer';

export const rootReducer = combineReducers({ contributors });
