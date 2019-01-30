// @flow
import {
  FETCH_LINK,
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED
} from "../constants/actionTypes";
import { type Link } from "../types";

export type FetchLink = { type: typeof FETCH_LINK, payload: string };
type FetchLinkRequest = { type: typeof FETCH_LINK_REQUESTED };
type FetchLinkSuccess = {
  type: typeof FETCH_LINK_SUCCEEDED,
  payload: Link
};
type FetchLinkError = { type: typeof FETCH_LINK_FAILED };

export const fetchLink = (id: string): FetchLink => ({
  type: FETCH_LINK,
  payload: id
});
export const fetchLinkRequest = (): FetchLinkRequest => ({
  type: FETCH_LINK_REQUESTED
});
export const fetchLinkSuccess = (data: Link): FetchLinkSuccess => ({
  type: FETCH_LINK_SUCCEEDED,
  payload: data
});
export const fetchLinkError = (): FetchLinkError => ({
  type: FETCH_LINK_FAILED
});

export type LinkActions =
  | FetchLink
  | FetchLinkRequest
  | FetchLinkSuccess
  | FetchLinkError;