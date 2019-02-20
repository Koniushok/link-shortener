// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_FAILED,
  CREATE_LINK_RESET,
} from '../constants/actionTypes';
import { type LinkCreate, type Link } from '../types';

export type CreateLinkRequested = {
  type: typeof CREATE_LINK_REQUESTED,
  payload: LinkCreate,
};
type CreateLinkSucceeded = {
  type: typeof CREATE_LINK_SUCCEEDED,
  payload: Link,
};
type CreateLinkFailed = {
  type: typeof CREATE_LINK_FAILED,
};
type CreateLinkReset = {
  type: typeof CREATE_LINK_RESET,
};

export const createLinkRequested = (link: LinkCreate): CreateLinkRequested => ({
  type: CREATE_LINK_REQUESTED,
  payload: link,
});
export const createLinkSucceeded = (link: Link): CreateLinkSucceeded => ({
  type: CREATE_LINK_SUCCEEDED,
  payload: link,
});
export const createLinkFailed = (): CreateLinkFailed => ({
  type: CREATE_LINK_FAILED,
});
export const createLinkReset = (): CreateLinkReset => ({
  type: CREATE_LINK_RESET,
});

export type LinkCreatorActions =
  | CreateLinkRequested
  | CreateLinkSucceeded
  | CreateLinkFailed
  | CreateLinkReset;
