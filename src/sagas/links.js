import { put, takeEvery } from "redux-saga/effects";
import { links } from "../actions";
import { LINKS } from "../constants/actionTypes";

export function* LinksLoad() {
  try {
    yield put(links.requestLinks);
  } catch (error) {
    yield put(links.requestError, error);
  }
}

export default function* watchLinksLoad() {
  yield takeEvery(LINKS.LOAD, LinksLoad);
}
