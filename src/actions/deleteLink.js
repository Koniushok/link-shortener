// @flow
import {
  DELETE_LINK_FAILED,
  DELETE_LINK_REQUESTED,
  DELETE_LINK_SUCCEEDED,
  DELETE_LINK_RESET,
} from '../constants/actionTypes';
import { type Link } from '../types';

export type DeleteLinkRequested = {
  type: typeof DELETE_LINK_REQUESTED,
  payload: string,
};
export type DeleteLinkSucceeded = {
  type: typeof DELETE_LINK_SUCCEEDED,
  payload: Link,
};
export type DeleteLinkFailed = { type: typeof DELETE_LINK_FAILED, payload: string };
export type DeleteLinkReset = { type: typeof DELETE_LINK_RESET };

export const deleteLinkRequested = (linkID: string): DeleteLinkRequested => ({
  type: DELETE_LINK_REQUESTED,
  payload: linkID,
});
export const deleteLinkSucceeded = (link: Link): DeleteLinkSucceeded => ({
  type: DELETE_LINK_SUCCEEDED,
  payload: link,
});
export const deleteLinkFailed = (error: string): DeleteLinkFailed => ({
  type: DELETE_LINK_FAILED,
  payload: error,
});
export const deleteLinkReset = (): DeleteLinkReset => ({
  type: DELETE_LINK_RESET,
});

export type DeleteLinkActions =
  | DeleteLinkRequested
  | DeleteLinkSucceeded
  | DeleteLinkFailed
  | DeleteLinkReset;
