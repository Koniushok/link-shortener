// @flow
import { put, call, all, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { clearProfile } from "../actions/profile";
import {
  authRequest,
  authSuccess,
  authError,
  authDisable,
  type Login
} from "../actions/auth";
import {
  LOGIN,
  LOGOUT,
  UNAUTHORIZED_ERROR_401
} from "../constants/actionTypes";
import { login, storeItem, removeItem, getItem } from "../api";

export function* authorize(action: Login): Saga<void> {
  try {
    yield put(authRequest());
    const token: string = yield call(
      login,
      action.payload.password,
      action.payload.loginName
    );
    yield call(storeItem, "token", token);
    yield put(authSuccess());
  } catch (error) {
    yield put(authError(error.message));
  }
}

export function* logout(): Saga<void> {
  yield put(clearProfile());
  yield put(authDisable());
  yield call(removeItem, "token");
}

export default function* watchAuth(): any {
  const token = yield getItem("token");
  if (token) {
    yield put(authSuccess());
  }

  yield all([
    takeLatest(LOGIN, authorize),
    takeLatest([LOGOUT, UNAUTHORIZED_ERROR_401], logout)
  ]);
}