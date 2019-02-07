// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { fetchLinkError, fetchLinkSuccess, type FetchLinkRequest } from '../actions/fetchLink';
import { FETCH_LINK_REQUESTED } from '../constants/actionTypes';
import { getLink } from '../api';

export function* fetchLink(action: FetchLinkRequest): Saga<void> {
  try {
    const link = yield call(getLink, action.payload);
    yield put(fetchLinkSuccess(link));
  } catch (error) {
    if (error.response) {
      yield put(fetchLinkError(error.response.data));
    } else {
      yield put(fetchLinkError(error.message));
    }
  }
}

export default function* watchFetchLink(): any {
  yield takeLatest(FETCH_LINK_REQUESTED, fetchLink);
}
