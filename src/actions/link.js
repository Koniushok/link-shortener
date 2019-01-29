// @flow
import {
  FETCH_LINK,
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED
} from "../constants/actionTypes";
import { Link } from "../types";

type FetchLink = { type: typeof FETCH_LINK };
type FetchLinkRequest = { type: typeof FETCH_LINK_REQUESTED };
type FetchLinkSuccess = {
  type: typeof FETCH_LINK_SUCCEEDED,
  payload: Link
};
type FetchLinkError = { type: typeof FETCH_LINK_FAILED, payload: string };

export const fetchLink = (): FetchLink => ({ type: FETCH_LINK });
export const fetchLinkRequest = (): FetchLinkRequest => ({
  type: FETCH_LINK_REQUESTED
});
export const fetchLinkSuccess = (data: Link): FetchLinkSuccess => ({
  type: FETCH_LINK_SUCCEEDED,
  payload: data
});
export const fetchLinkError = (error: string): FetchLinkError => ({
  type: FETCH_LINK_FAILED,
  payload: error
});

export type LinkActions =
  | FetchLink
  | FetchLinkRequest
  | FetchLinkSuccess
  | FetchLinkError;
