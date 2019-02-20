// @flow
import uniqid from 'uniqid';
import { NOTICE_ADD, NOTICE_DELETE } from '../constants/actionTypes';
import { type Notice } from '../types';

type NoticeAdd = {
  type: typeof NOTICE_ADD,
  payload: Notice,
};
type NoticeDelete = {
  type: typeof NOTICE_DELETE,
  payload: string,
};
export const noticeAdd = (notice: $Diff<Notice, { id: string }>): NoticeAdd => ({
  type: NOTICE_ADD,
  payload: { ...notice, id: uniqid() },
});

export const noticeDelete = (id: string): NoticeDelete => ({
  type: NOTICE_DELETE,
  payload: id,
});

export type NoticeActions = NoticeAdd | NoticeDelete;
