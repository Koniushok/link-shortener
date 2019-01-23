// @flow
import { LINKS, FETCH_PROFILE } from "../constants/actionTypes";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};
type LoadMy = { type: typeof LINKS.LOAD_MY };
type LoadAll = { type: typeof LINKS.LOAD_ALL };
type Request = { type: typeof LINKS.REQUESTED };
type RequestSuccess = {
  type: typeof LINKS.REQUESTED_SUCCEEDED,
  data: Array<Link>
};
type RequestError = { type: typeof LINKS.REQUESTED_FAILED, error: string };

export const links = {
  loadMy: (): LoadMy => ({ type: LINKS.LOAD_MY }),
  loadAll: (): LoadAll => ({ type: LINKS.LOAD_ALL }),
  request: (): Request => ({ type: LINKS.REQUESTED }),
  requestSuccess: (data: Array<Link>): RequestSuccess => ({
    type: LINKS.REQUESTED_SUCCEEDED,
    data
  }),
  requestError: (error: string): RequestError => ({
    type: LINKS.REQUESTED_FAILED,
    error
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
