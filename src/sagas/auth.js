// @flow
import { put, call, take } from "redux-saga/effects";
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

export function* authorize(password: string, loginName: string): Saga<string> {
  try {
    yield put(authRequest());
    const token: string = yield call(login, password, loginName);
    yield call(storeItem, "token", token);
    yield put(authSuccess());
    return token;
  } catch (error) {
    yield put(authError(error.message));
    return "";
  }
}

export function* logout(): Saga<void> {
  yield put(clearProfile());
  yield put(authDisable());
  yield call(removeItem, "token");
}

export default function* watchAuth(): any {
  let token = yield getItem("token");
  while (true) {
    if (token) {
      yield take([LOGOUT, UNAUTHORIZED_ERROR_401]);
      yield call(logout);
    }
    const { payload }: Login = yield take(LOGIN);
    token = yield call(authorize, payload.password, payload.loginName);
  }
}
