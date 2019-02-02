// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  linksLoadError,
  linksLoadRequest,
  linksLoadSuccess,
  type LinksActions,
} from '../actions/links';
import { LINKS_LOAD_ALL, LINKS_LOAD_MY } from '../constants/actionTypes';
import { getAllLinks, getMyLinks } from '../api';

export function* linksLoad(action: LinksActions): Saga<void> {
  try {
    yield put(linksLoadRequest());
    let data;
    if (action.type === LINKS_LOAD_ALL) {
      data = yield call(getAllLinks);
    } else {
      data = yield call(getMyLinks);
    }
    yield put(linksLoadSuccess(data));
  } catch (error) {
    yield put(linksLoadError(error.message));
  }
}

export default function* watchLinksLoad(): any {
  yield takeLatest([LINKS_LOAD_ALL, LINKS_LOAD_MY], linksLoad);
}
