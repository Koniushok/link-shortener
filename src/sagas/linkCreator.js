// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  createLinkFailed,
  createLinkSucceeded,
  type CreateLinkRequested,
} from '../actions/linkCreator';
import { CREATE_LINK_REQUESTED } from '../constants/actionTypes';
import { noticeAdd } from '../actions/notice';
import { createLink } from '../api';

export function* create(action: CreateLinkRequested): Saga<void> {
  try {
    const response = yield call(createLink, action.payload);
    yield put(createLinkSucceeded(response));
    yield put(
      noticeAdd({ level: 'success', text: `Link ${response.shortLink} successfully created` }),
    );
  } catch (ex) {
    yield put(createLinkFailed());
  }
}

export default function* watchCreateLink(): any {
  yield takeLatest(CREATE_LINK_REQUESTED, create);
}
