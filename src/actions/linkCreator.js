// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_FAILED,
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
  payload: string,
};

export const createLinkRequested = (link: LinkCreate): CreateLinkRequested => ({
  type: CREATE_LINK_REQUESTED,
  payload: link,
});
export const createLinkSucceeded = (link: Link): CreateLinkSucceeded => ({
  type: CREATE_LINK_SUCCEEDED,
  payload: link,
});
export const createLinkFailed = (error: string): CreateLinkFailed => ({
  type: CREATE_LINK_FAILED,
  payload: error,
});

export type LinkCreatorActions = CreateLinkRequested | CreateLinkSucceeded | CreateLinkFailed;
