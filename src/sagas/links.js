// @flow
import { put, call, takeEvery } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { links } from "../actions";
import { LINKS } from "../constants/actionTypes";
import { getLinks } from "../api";

export function* linksLoad(): Saga<void> {
  try {
    yield put(links.request());
    const data = yield call(getLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error));
  }
}

export default function* watchLinksLoad(): any {
  yield takeEvery(LINKS.LOAD, linksLoad);
}
