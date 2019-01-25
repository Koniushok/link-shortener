// @flow
import { LINKS, FETCH_PROFILE } from "../constants/actionTypes";
import { type Link } from "../types";

type LoadMy = { type: typeof LINKS.LOAD_MY };
type LoadAll = { type: typeof LINKS.LOAD_ALL };
type Request = { type: typeof LINKS.REQUESTED };
type RequestSuccess = {
  type: typeof LINKS.REQUESTED_SUCCEEDED,
  payload: Array<Link>
};
type RequestError = { type: typeof LINKS.REQUESTED_FAILED, payload: string };

export const links = {
  loadMy: (): LoadMy => ({ type: LINKS.LOAD_MY }),
  loadAll: (): LoadAll => ({ type: LINKS.LOAD_ALL }),
  request: (): Request => ({ type: LINKS.REQUESTED }),
  requestSuccess: (data: Array<Link>): RequestSuccess => ({
    type: LINKS.REQUESTED_SUCCEEDED,
    payload: data
  }),
  requestError: (error: string): RequestError => ({
    type: LINKS.REQUESTED_FAILED,
    payload: error
  })
};

type FetchProfile = { type: typeof FETCH_PROFILE };
export const fetchProfile = (): FetchProfile => ({ type: FETCH_PROFILE });

export type LinksActions =
  | RequestError
  | LoadAll
  | Request
  | RequestSuccess
  | LoadMy;
export type Actions = LinksActions | FetchProfile;
