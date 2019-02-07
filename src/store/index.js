// @flow
/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, type Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { type State } from '../reducers';
import rootSaga from '../sagas';
import { type Actions } from '../actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware: any = createSagaMiddleware();
const store: Store<State, Actions> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
