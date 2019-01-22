import { put, call, takeEvery } from "redux-saga/effects";
import { links } from "../actions";
import { LINKS } from "../constants/actionTypes";
import { getLinks } from "../api";

export function* LinksLoad() {
  try {
    yield put(links.requestLinks());
    const data = yield call(getLinks);
    yield put(links.requestSuccess(data));
  } catch (error) {
    yield put(links.requestError(error));
  }
}

export default function* watchLinksLoad() {
  yield takeEvery(LINKS.LOAD, LinksLoad);
}
