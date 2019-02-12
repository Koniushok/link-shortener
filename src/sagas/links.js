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
    let data = null;
    switch (action.type) {
      case LINKS_LOAD_ALL:
        data = yield call(getAllLinks, action.payload);
        break;
      case LINKS_LOAD_MY:
        data = yield call(getMyLinks, action.payload);
        break;
      default:
        data = yield call(getAllLinks);
        break;
    }
    yield put(linksLoadSuccess(data));
  } catch (error) {
    if (error.response) {
      yield put(linksLoadError(error.response.data));
    } else {
      yield put(linksLoadError(error.message));
    }
  }
}

export default function* watchLinksLoad(): any {
  yield takeLatest([LINKS_LOAD_ALL, LINKS_LOAD_MY], linksLoad);
}
