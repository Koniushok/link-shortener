// @flow
import {
  put, call, all, takeLatest,
} from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  authSuccess, authError, authDisable, type Login,
} from '../actions/auth';
import { LOGIN, LOGOUT } from '../constants/actionTypes';
import {
  login, storeToken, removeToken, getToken,
} from '../api';

export function* authorize(action: Login): Saga<void> {
  try {
    const token: string = yield call(login, action.payload.password, action.payload.loginName);
    yield call(storeToken, token);
    yield put(authSuccess());
  } catch (error) {
    yield put(authError(error.message));
  }
}

export function* logout(): Saga<void> {
  yield put(authDisable());
  yield call(removeToken);
}

export default function* watchAuth(): any {
  if (yield getToken()) {
    yield put(authSuccess());
  }

  yield all([takeLatest(LOGIN, authorize), takeLatest(LOGOUT, logout)]);
}
