// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  registryRequest,
  registrySuccess,
  registryError,
  type Registry,
} from '../actions/registry';
import { REGISTRY } from '../constants/actionTypes';
import { createProfile } from '../api';

export function* register(action: Registry): Saga<void> {
  try {
    yield put(registryRequest());
    const result = yield call(createProfile, action.payload);
    yield put(registrySuccess(result));
  } catch (error) {
    yield put(registryError(error.message));
  }
}

export default function* watchCreateProfile(): any {
  yield takeLatest(REGISTRY, register);
}
