// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  deleteLinkSucceeded,
  deleteLinkFailed,
  type DeleteLinkRequested,
} from '../actions/deleteLink';
import { noticeAdd } from '../actions/notice';
import { DELETE_LINK_REQUESTED } from '../constants/actionTypes';
import { deleteLink } from '../api';

export function* removeLink(action: DeleteLinkRequested): Saga<void> {
  try {
    const response = yield call(deleteLink, action.payload);
    yield put(deleteLinkSucceeded(response));
    yield put(
      noticeAdd({ level: 'success', text: `Link ${response.shortLink} successfully deleted` }),
    );
  } catch (ex) {
    yield put(deleteLinkFailed());
  }
}

export default function* watchDeleteLink(): any {
  yield takeLatest(DELETE_LINK_REQUESTED, removeLink);
}
