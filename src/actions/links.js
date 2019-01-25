// @flow
import { LINKS } from "../constants/actionTypes";
import { type Link } from "../types";

type LoadMy = { type: typeof LINKS.LOAD_MY };
type LoadAll = { type: typeof LINKS.LOAD_ALL };
type Request = { type: typeof LINKS.REQUESTED };
type RequestSuccess = {
  type: typeof LINKS.REQUESTED_SUCCEEDED,
  payload: Array<Link>
};
type RequestError = { type: typeof LINKS.REQUESTED_FAILED, payload: string };

export const loadMy = (): LoadMy => ({ type: LINKS.LOAD_MY });
export const loadAll = (): LoadAll => ({ type: LINKS.LOAD_ALL });
export const request = (): Request => ({ type: LINKS.REQUESTED });
export const requestSuccess = (data: Array<Link>): RequestSuccess => ({
  type: LINKS.REQUESTED_SUCCEEDED,
  payload: data
});
export const requestError = (error: string): RequestError => ({
  type: LINKS.REQUESTED_FAILED,
  payload: error
});

export type LinksActions =
  | RequestError
  | LoadAll
  | Request
  | RequestSuccess
  | LoadMy;
