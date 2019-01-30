// @flow
import {
  CREATE_LINK,
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_FAILED
} from "../constants/actionTypes";
import { type LinkCreate } from "../types";

export type CreateLink = { type: typeof CREATE_LINK, payload: LinkCreate };
type CreateLinkRequested = { type: typeof CREATE_LINK_REQUESTED };
type CreateLinkSucceeded = {
  type: typeof CREATE_LINK_SUCCEEDED,
  payload: string
};
type CreateLinkFailed = {
  type: typeof CREATE_LINK_FAILED,
  payload: string
};

export const createLink = (link: LinkCreate): CreateLink => ({
  type: CREATE_LINK,
  payload: link
});
export const createLinkRequested = (): CreateLinkRequested => ({
  type: CREATE_LINK_REQUESTED
});
export const createLinkSucceeded = (result: string): CreateLinkSucceeded => ({
  type: CREATE_LINK_SUCCEEDED,
  payload: result
});
export const createLinkFailed = (error: string): CreateLinkFailed => ({
  type: CREATE_LINK_FAILED,
  payload: error
});

export type LinkCreatorActions =
  | CreateLink
  | CreateLinkRequested
  | CreateLinkSucceeded
  | CreateLinkFailed;
