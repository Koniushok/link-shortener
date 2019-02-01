// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_FAILED
} from "../constants/actionTypes";
import { type LinkCreate } from "../types";

export type CreateLinkRequested = {
  type: typeof CREATE_LINK_REQUESTED,
  payload: LinkCreate
};
type CreateLinkSucceeded = {
  type: typeof CREATE_LINK_SUCCEEDED,
  payload: string
};
type CreateLinkFailed = {
  type: typeof CREATE_LINK_FAILED,
  payload: string
};

export const createLinkRequested = (link: LinkCreate): CreateLinkRequested => ({
  type: CREATE_LINK_REQUESTED,
  payload: link
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
  | CreateLinkRequested
  | CreateLinkSucceeded
  | CreateLinkFailed;
