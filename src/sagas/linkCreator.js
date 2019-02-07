// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  createLinkFailed,
  createLinkSucceeded,
  type CreateLinkRequested,
} from '../actions/linkCreator';
import { CREATE_LINK_REQUESTED } from '../constants/actionTypes';
import { createLink } from '../api';

export function* create(action: CreateLinkRequested): Saga<void> {
  try {
    const response = yield call(createLink, action.payload);
    yield put(createLinkSucceeded(response));
  } catch (error) {
    if (error.response) {
      yield put(createLinkFailed(error.response.data));
    } else {
      yield put(createLinkFailed(error.message));
    }
  }
}

export default function* watchCreateLink(): any {
  yield takeLatest(CREATE_LINK_REQUESTED, create);
}
