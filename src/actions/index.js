// @flow
import { LINKS, FETCH_PROFILE } from "../constants/actionTypes";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

type Load = { type: typeof LINKS.LOAD };
type Request = { type: typeof LINKS.REQUESTED };
type RequestSuccess = {
  type: typeof LINKS.REQUESTED_SUCCEEDED,
  data: Array<Link>
};
type RequestError = { type: typeof LINKS.REQUESTED_FAILED, error: string };

export const links = {
  load: (): Load => ({ type: LINKS.LOAD }),
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

export type LinksActions = RequestError | Load | Request | RequestSuccess;
export type Actions = LinksActions | FetchProfile;
