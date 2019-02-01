// @flow
import { put, call, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  registrySuccess,
  registryError,
  type RegistryRequest
} from "../actions/registry";
import { REGISTRY_REQUESTED } from "../constants/actionTypes";
import { createProfile } from "../api";

export function* register(action: RegistryRequest): Saga<void> {
  try {
    const result = yield call(createProfile, action.payload);
    yield put(registrySuccess(result));
  } catch (error) {
    yield put(registryError(error.message));
  }
}

export default function* watchCreateProfile(): any {
  yield takeLatest(REGISTRY_REQUESTED, register);
}
