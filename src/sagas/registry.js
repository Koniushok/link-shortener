// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { registrySuccess, registryError, type RegistryRequest } from '../actions/registry';
import { REGISTRY_REQUESTED } from '../constants/actionTypes';
import { createProfile, storeToken } from '../api';

export function* register(action: RegistryRequest): Saga<void> {
  try {
    const token = yield call(createProfile, action.payload);
    yield put(registrySuccess(token));
    yield call(storeToken, token);
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
