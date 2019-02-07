// @flow
import {
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED,
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

export type LinkActions = FetchLinkRequest | FetchLinkSuccess | FetchLinkError;
