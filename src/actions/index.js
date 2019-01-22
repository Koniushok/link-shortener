// @flow
import { LINKS, FETCH_PROFILE } from "../constants/actionTypes";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};
type Load = { type: LINKS.LOAD };
type Request = { type: LINKS.REQUESTED };
type RequestSuccess = {
  type: LINKS.REQUESTED_SUCCEEDED,
  data: Array<Link>
};
type RequestError = { type: LINKS.LOAD, error: string };
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

type FetchProfile = { type: LINKS.REQUESTED };
export const fetchProfile = (): FetchProfile => ({ type: FETCH_PROFILE });

export type Actions = Link | Load | Request | RequestSuccess | FetchProfile;
