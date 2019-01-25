// @flow
import { put, call, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  request,
  requestError,
  requestSuccess,
  type LinksActions
} from "../actions/links";
import { LINKS } from "../constants/actionTypes";
import { getAllLinks, getMyLinks } from "../api";

export function* linksLoad(action: LinksActions): Saga<void> {
  try {
    yield put(request());
    let data;
    if (action.type === LINKS.LOAD_ALL) data = yield call(getAllLinks);
    else data = yield call(getMyLinks);
    yield put(requestSuccess(data));
  } catch (error) {
    yield put(requestError(error.message));
  }
}

export default function* watchLinksLoad(): any {
  yield takeLatest([LINKS.LOAD_ALL, LINKS.LOAD_MY], linksLoad);
}
