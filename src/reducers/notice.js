// @flow
import { NOTICE_ADD, NOTICE_DELETE } from '../constants/actionTypes';
import { type NoticeActions } from '../actions/notice';
import { type Notice } from '../types';

export type State = Array<Notice>;
const initialState: State = [];

const noticeReducer = (state: State = initialState, action: NoticeActions): State => {
  switch (action.type) {
    case NOTICE_ADD:
      return [...state, action.payload];
    case NOTICE_DELETE:
      return state ? state.filter(({ id }) => id !== action.payload) : [];
    default:
      return [...state];
  }
};

export default noticeReducer;
