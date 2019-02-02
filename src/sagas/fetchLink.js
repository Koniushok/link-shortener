// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  fetchLinkError,
  fetchLinkRequest,
  fetchLinkSuccess,
  type FetchLink,
} from '../actions/link';
import { FETCH_LINK } from '../constants/actionTypes';
import { getLink } from '../api';

export function* fetchLink(action: FetchLink): Saga<void> {
  try {
    yield put(fetchLinkRequest());
    const link = yield call(getLink, action.payload);
    yield put(fetchLinkSuccess(link));
  } catch (error) {
    yield put(fetchLinkError());
  }
}

export default function* watchFetchLink(): any {
  yield takeLatest(FETCH_LINK, fetchLink);
}
