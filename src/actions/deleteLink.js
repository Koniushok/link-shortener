// @flow
import {
  DELETE_LINK_FAILED,
  DELETE_LINK_REQUESTED,
  DELETE_LINK_SUCCEEDED,
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
export type DeleteLinkFailed = { type: typeof DELETE_LINK_FAILED };

export const deleteLinkRequested = (linkID: string): DeleteLinkRequested => ({
  type: DELETE_LINK_REQUESTED,
  payload: linkID,
});
export const deleteLinkSucceeded = (link: Link): DeleteLinkSucceeded => ({
  type: DELETE_LINK_SUCCEEDED,
  payload: link,
});
export const deleteLinkFailed = (): DeleteLinkFailed => ({
  type: DELETE_LINK_FAILED,
});

export type DeleteLinkActions = DeleteLinkRequested | DeleteLinkSucceeded | DeleteLinkFailed;
