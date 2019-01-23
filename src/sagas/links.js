// @flow
import { put, call, takeEvery, all } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { links } from "../actions";
import { LINKS } from "../constants/actionTypes";
import { getAllLinks, getMyLinks } from "../api";

export function* linksLoadAll(): Saga<void> {
  try {
    yield put(links.request());
    const data = yield call(getAllLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error));
  }
}

export function* linksLoadMy(): Saga<void> {
  try {
    yield put(links.request());
    const data = yield call(getMyLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error));
  }
}

export default function* watchLinksLoad(): any {
  yield all([
    takeEvery(LINKS.LOAD_ALL, linksLoadAll),
    takeEvery(LINKS.LOAD_MY, linksLoadMy)
  ]);
}
