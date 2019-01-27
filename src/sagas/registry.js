// @flow
import { put, call, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  request,
  requestError,
  requestSuccess,
  type CreateProfile
} from "../actions/registry";
import { REGISTRY } from "../constants/actionTypes";
import { createProfile } from "../api";

export function* register(action: CreateProfile): Saga<void> {
  try {
    yield put(request());
    const result = yield call(createProfile, action.payload);
    yield put(requestSuccess(result));
  } catch (error) {
    yield put(requestError(error.message));
  }
}

export default function* watchCreateProfile(): any {
  yield takeLatest(REGISTRY.CREATE_PROFILE, register);
}
