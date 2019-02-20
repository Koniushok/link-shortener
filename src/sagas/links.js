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
    let response;
    switch (action.type) {
      case LINKS_LOAD_ALL:
        response = yield call(getAllLinks, action.payload);
        break;
      case LINKS_LOAD_MY:
        response = yield call(getMyLinks, action.payload);
        break;
      default:
        response = yield call(getMyLinks, '');
        break;
    }
    yield put(linksLoadSuccess(response.links, response.linkCount));
  } catch (ex) {
    yield put(linksLoadError());
  }
}

export default function* watchLinksLoad(): any {
  yield takeLatest([LINKS_LOAD_ALL, LINKS_LOAD_MY], linksLoad);
}
