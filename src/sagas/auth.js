// @flow
import {
  put, call, all, takeLatest,
} from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  authSuccess, authError, authDisable, type Login,
} from '../actions/auth';
import { noticeAdd } from '../actions/notice';
import { LOGIN, LOGOUT } from '../constants/actionTypes';
import {
  login, storeToken, removeToken, checkToken,
} from '../api';

export function* authorize(action: Login): Saga<void> {
  try {
    const token: string = yield call(login, action.payload.password, action.payload.loginName);
    yield call(storeToken, token);
    yield put(authSuccess(token));
    yield put(noticeAdd({ level: 'success', text: 'Successful login' }));
  } catch (ex) {
    yield put(authError());
  }
}

export function* logout(): Saga<void> {
  yield put(authDisable());
  yield call(removeToken);
}

export default function* watchAuth(): any {
  const token = yield checkToken();
  if (token) {
    yield put(authSuccess(token));
  }

  yield all([takeLatest(LOGIN, authorize), takeLatest(LOGOUT, logout)]);
}
