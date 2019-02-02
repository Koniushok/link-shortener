// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type Link } from '../types';

export type EditLinkRequested = {
  type: typeof EDIT_LINK_REQUESTED,
  payload: Link,
};
type EditLinkSucceeded = {
  type: typeof EDIT_LINK_SUCCEEDED,
  payload: string,
};
type EditLinkFailed = { type: typeof EDIT_LINK_FAILED, payload: string };

export const editLinkRequested = (link: Link): EditLinkRequested => ({
  type: EDIT_LINK_REQUESTED,
  payload: link,
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
