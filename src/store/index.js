// @flow
import { createStore, applyMiddleware, type Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { type State } from '../reducers';
import rootSaga from '../sagas';
import { type Actions } from '../actions';

const sagaMiddleware: any = createSagaMiddleware();
const store: Store<State, Actions> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
