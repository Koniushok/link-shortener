// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  createLinkFailed,
  createLinkRequested,
  createLinkSucceeded,
  type CreateLink,
} from '../actions/linkCreator';
import { CREATE_LINK } from '../constants/actionTypes';
import { createLink } from '../api';

export function* create(action: CreateLink): Saga<void> {
  try {
    yield put(createLinkRequested());
    const result = yield call(createLink, action.payload);
    yield put(createLinkSucceeded(result));
  } catch (error) {
    yield put(createLinkFailed(error.message));
  }
}

export default function* watchCreateLink(): any {
  yield takeLatest(CREATE_LINK, create);
}
