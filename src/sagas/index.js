import { all } from "redux-saga/effects";
import linksSaga from "./links";

export default function* rootSaga() {
  yield all([linksSaga()]);
}
