// @flow
import { put, call, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { links, type LinksActions } from "../actions";
import { LINKS } from "../constants/actionTypes";
import { getAllLinks, getMyLinks } from "../api";

export function* linksLoad(action: LinksActions): Saga<void> {
  try {
    yield put(links.request());
    let data;
    if (action.type === LINKS.LOAD_ALL) data = yield call(getAllLinks);
    else data = yield call(getMyLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error.message));
  }
}

export default function* watchLinksLoad(): any {
  yield takeLatest([LINKS.LOAD_ALL, LINKS.LOAD_MY], linksLoad);
}
