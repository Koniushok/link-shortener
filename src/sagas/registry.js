// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { registrySuccess, registryError, type RegistryRequest } from '../actions/registry';
import { REGISTRY_REQUESTED } from '../constants/actionTypes';
import { createProfile } from '../api';

export function* register(action: RegistryRequest): Saga<void> {
  try {
    const response = yield call(createProfile, action.payload);
    yield put(registrySuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(registryError(error.response.data));
    } else {
      yield put(registryError(error.message));
    }
  }
}

export default function* watchCreateProfile(): any {
  yield takeLatest(REGISTRY_REQUESTED, register);
}
