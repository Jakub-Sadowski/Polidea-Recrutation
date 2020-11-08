import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';
import { Action, ApiRequest, ResponseModel } from '../api-interfaces';

const epicMiddleware = createEpicMiddleware<Action<ApiRequest>, Action<ResponseModel>, void, any>();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);
