// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
  EDIT_LINK_RESET,
} from '../constants/actionTypes';
import { type LinkCreate, type Link } from '../types';

export type EditLinkRequested = {
  type: typeof EDIT_LINK_REQUESTED,
  payload: { linkID: string, link: LinkCreate },
};
type EditLinkSucceeded = {
  type: typeof EDIT_LINK_SUCCEEDED,
  payload: Link,
};
type EditLinkFailed = { type: typeof EDIT_LINK_FAILED, payload: string };
type EditLinkReset = { type: typeof EDIT_LINK_RESET };

export const editLinkRequested = (linkID: string, link: LinkCreate): EditLinkRequested => ({
  type: EDIT_LINK_REQUESTED,
  payload: { linkID, link },
});
export const editLinkSucceeded = (link: Link): EditLinkSucceeded => ({
  type: EDIT_LINK_SUCCEEDED,
  payload: link,
});
export const editLinkFailed = (error: string): EditLinkFailed => ({
  type: EDIT_LINK_FAILED,
  payload: error,
});
export const editLinkReset = (): EditLinkReset => ({
  type: EDIT_LINK_RESET,
});

export type EditLinkActions =
  | EditLinkRequested
  | EditLinkSucceeded
  | EditLinkFailed
  | EditLinkReset;
