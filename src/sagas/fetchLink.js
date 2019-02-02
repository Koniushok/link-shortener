// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  fetchLinkError,
  fetchLinkSuccess,
  type FetchLinkRequest,
} from '../actions/fetchLink';
import { FETCH_LINK_REQUESTED } from '../constants/actionTypes';
import { getLink } from '../api';

export function* fetchLink(action: FetchLinkRequest): Saga<void> {
  try {
    const link = yield call(getLink, action.payload);
    yield put(fetchLinkSuccess(link));
  } catch (error) {
    yield put(fetchLinkError());
  }
}

export default function* watchFetchLink(): any {
  yield takeLatest(FETCH_LINK_REQUESTED, fetchLink);
}
