// @flow
import { put, call, takeLatest, all, select } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  request,
  requestError,
  requestSuccess,
  logoutSuccess,
  type Login
} from "../actions/user";
import { USER } from "../constants/actionTypes";
import { login } from "../api";

export function* authorize(action: Login): Saga<void> {
  try {
    yield put(request());
    const profile = yield call(
      login,
      action.payload.password,
      action.payload.loginName
    );
    yield put(requestSuccess(profile));
  } catch (error) {
    yield put(requestError(error.message));
  }
}

const getAuth = state => state.user.auth;

export function* logout(): Saga<void> {
  const auth = yield select(getAuth);
  if (auth) {
    yield put(logoutSuccess());
  }
}

export default function* watchUser(): any {
  yield all([
    takeLatest(USER.LOGIN, authorize),
    takeLatest(USER.LOGOUT, logout)
  ]);
}
