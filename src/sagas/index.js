// @flow
import { all } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import linksSaga from "./links";
import authSaga from "./auth";
import registrySaga from "./registry";
import linkCreatorSaga from "./linkCreator";
import fetchLinkSaga from "./fetchLink";

export default function* rootSaga(): Saga<void> {
  yield all([
    linksSaga(),
    authSaga(),
    registrySaga(),
    linkCreatorSaga(),
    fetchLinkSaga()
  ]);
}
