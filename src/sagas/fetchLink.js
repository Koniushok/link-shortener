// @flow
import { put, call, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  fetchLinkError,
  fetchLinkRequest,
  fetchLinkSuccess
} from "../actions/link";
import { FETCH_LINK } from "../constants/actionTypes";
import { getAllLinks } from "../api";

export function* fetchLink(): Saga<void> {
  try {
    yield put(fetchLinkRequest());
    const link = yield call(getAllLinks);
    yield put(fetchLinkSuccess(link));
  } catch (error) {
    yield put(fetchLinkError(error.message));
  }
}

export default function* watchFetchLink(): any {
  yield takeLatest(FETCH_LINK, fetchLink);
}
