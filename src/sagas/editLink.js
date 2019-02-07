// @flow
import { put, call, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { editLinkSucceeded, editLinkFailed, type EditLinkRequested } from '../actions/editLink';
import { EDIT_LINK_REQUESTED } from '../constants/actionTypes';
import { editLink } from '../api';

export function* changeLink(action: EditLinkRequested): Saga<void> {
  try {
    const response = yield call(editLink, action.payload.linkID, action.payload.link);
    yield put(editLinkSucceeded(response));
  } catch (error) {
    if (error.response) {
      yield put(editLinkFailed(error.response.data));
    } else {
      yield put(editLinkFailed(error.message));
    }
  }
}

export default function* watchEditLink(): any {
  yield takeLatest(EDIT_LINK_REQUESTED, changeLink);
}
