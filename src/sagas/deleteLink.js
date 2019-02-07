// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import {
  deleteLinkSucceeded,
  deleteLinkFailed,
  type DeleteLinkRequested,
} from '../actions/deleteLink';
import { DELETE_LINK_REQUESTED } from '../constants/actionTypes';
import { deleteLink } from '../api';

export function* removeLink(action: DeleteLinkRequested): Saga<void> {
  try {
    const response = yield call(deleteLink, action.payload);
    yield put(deleteLinkSucceeded(response));
  } catch (error) {
    if (error.response) {
      yield put(deleteLinkFailed(error.response.data));
    } else {
      yield put(deleteLinkFailed(error.message));
    }
  }
}

export default function* watchDeleteLink(): any {
  yield takeLatest(DELETE_LINK_REQUESTED, removeLink);
}
