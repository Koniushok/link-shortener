// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinkCreate } from '../types';

export type EditLinkRequested = {
  type: typeof EDIT_LINK_REQUESTED,
  payload: { linkID: string, link: LinkCreate },
};
type EditLinkSucceeded = {
  type: typeof EDIT_LINK_SUCCEEDED,
  payload: string,
};
type EditLinkFailed = { type: typeof EDIT_LINK_FAILED, payload: string };

export const editLinkRequested = (linkID: string, link: LinkCreate): EditLinkRequested => ({
  type: EDIT_LINK_REQUESTED,
  payload: { linkID, link },
});
export const editLinkSucceeded = (result: string): EditLinkSucceeded => ({
  type: EDIT_LINK_SUCCEEDED,
  payload: result,
});
export const editLinkFailed = (error: string): EditLinkFailed => ({
  type: EDIT_LINK_FAILED,
  payload: error,
});

export type EditLinkActions = EditLinkRequested | EditLinkSucceeded | EditLinkFailed;
