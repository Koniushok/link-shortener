// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { fetchProfileError, fetchProfileSuccess } from '../actions/fetchProfile';
import { FETCH_PROFILE_REQUESTED } from '../constants/actionTypes';
import { getMyProfile } from '../api';

export function* fetchProfile(): Saga<void> {
  try {
    const profile = yield call(getMyProfile);
    yield put(fetchProfileSuccess(profile));
  } catch (ex) {
    yield put(fetchProfileError());
  }
}

export default function* watchFetchProfile(): any {
  yield takeLatest(FETCH_PROFILE_REQUESTED, fetchProfile);
}
