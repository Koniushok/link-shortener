// @flow
import { all } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import linksSaga from "./links";
import fetchLinkSaga from "./fetchLink";

export default function* rootSaga(): Saga<void> {
  yield all([linksSaga(), fetchLinkSaga()]);
}
