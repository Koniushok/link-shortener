// @flow
import {
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED,
  FETCH_LINK_RESET,
} from '../constants/actionTypes';
import { type Link } from '../types';

export type FetchLinkRequest = {
  type: typeof FETCH_LINK_REQUESTED,
  payload: string,
};
type FetchLinkSuccess = {
  type: typeof FETCH_LINK_SUCCEEDED,
  payload: Link,
};
type FetchLinkError = { type: typeof FETCH_LINK_FAILED, payload: string };
type FetchLinkReset = { type: typeof FETCH_LINK_RESET };

export const fetchLinkRequest = (id: string): FetchLinkRequest => ({
  type: FETCH_LINK_REQUESTED,
  payload: id,
});
export const fetchLinkSuccess = (data: Link): FetchLinkSuccess => ({
  type: FETCH_LINK_SUCCEEDED,
  payload: data,
});
export const fetchLinkError = (error: string): FetchLinkError => ({
  type: FETCH_LINK_FAILED,
  payload: error,
});
export const fetchLinkReset = (): FetchLinkReset => ({
  type: FETCH_LINK_RESET,
});

export type LinkActions = FetchLinkRequest | FetchLinkSuccess | FetchLinkError | FetchLinkReset;
