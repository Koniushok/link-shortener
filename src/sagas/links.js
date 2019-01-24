// @flow
import { put, call, takeEvery, all } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { links } from "../actions";
import { LINKS } from "../constants/actionTypes";
import { getAllLinks, getMyLinks } from "../api";

export function* linksLoad(type: "all" | "my"): Saga<void> {
  try {
    yield put(links.request());
    let data;
    if (type === "all") data = yield call(getAllLinks);
    else data = yield call(getMyLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error));
  }
}

export default function* watchLinksLoad(): any {
  yield all([
    takeEvery(LINKS.LOAD_ALL, linksLoad, "all"),
    takeEvery(LINKS.LOAD_MY, linksLoad, "my")
  ]);
}
