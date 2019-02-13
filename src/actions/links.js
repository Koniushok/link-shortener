// @flow
import {
  LINKS_LOAD_SUCCEEDED,
  LINKS_LOAD_ALL,
  LINKS_LOAD_FAILED,
  LINKS_LOAD_MY,
  LINKS_LOAD_REQUESTED,
  LINKS_LOAD_RESET,
  FETCH_LINKS_CLICKS_REQUESTED,
  FETCH_LINKS_CLICKS_SUCCEEDED,
} from '../constants/actionTypes';
import { type Link } from '../types';
import { type TypeLinksLoad } from '../constants/display';

type LinksLoadMy = { type: typeof LINKS_LOAD_MY, payload?: string };
type LinksLoadAll = { type: typeof LINKS_LOAD_ALL, payload?: string };
type LinksLoadRequest = { type: typeof LINKS_LOAD_REQUESTED };
type LinksLoadSuccess = {
  type: typeof LINKS_LOAD_SUCCEEDED,
  payload: Array<Link>,
};
type LinksLoadError = { type: typeof LINKS_LOAD_FAILED, payload: string };
type LinksLoadReset = { type: typeof LINKS_LOAD_RESET };
export type FetchLinksClicksRequested = {
  type: typeof FETCH_LINKS_CLICKS_REQUESTED,
  payload: TypeLinksLoad,
};
type FetchLinksClicksSucceeded = {
  type: typeof FETCH_LINKS_CLICKS_SUCCEEDED,
  payload: number,
};

export const linksLoadMy = (tag?: string): LinksLoadMy => ({
  type: LINKS_LOAD_MY,
  payload: tag,
});
export const linksLoadAll = (tag?: string): LinksLoadAll => ({
  type: LINKS_LOAD_ALL,
  payload: tag,
});
export const linksLoadRequest = (): LinksLoadRequest => ({
  type: LINKS_LOAD_REQUESTED,
});
export const linksLoadSuccess = (data: Array<Link>): LinksLoadSuccess => ({
  type: LINKS_LOAD_SUCCEEDED,
  payload: data,
});
export const linksLoadError = (error: string): LinksLoadError => ({
  type: LINKS_LOAD_FAILED,
  payload: error,
});
export const linksLoadReset = (): LinksLoadReset => ({
  type: LINKS_LOAD_RESET,
});
export const fetchLinksClicksRequested = (typeLoad: TypeLinksLoad): FetchLinksClicksRequested => ({
  type: FETCH_LINKS_CLICKS_REQUESTED,
  payload: typeLoad,
});
export const fetchLinksClicksSucceeded = (clicks: number): FetchLinksClicksSucceeded => ({
  type: FETCH_LINKS_CLICKS_SUCCEEDED,
  payload: clicks,
});

export type LinksActions =
  | LinksLoadMy
  | LinksLoadAll
  | LinksLoadRequest
  | LinksLoadSuccess
  | LinksLoadError
  | LinksLoadReset
  | FetchLinksClicksRequested
  | FetchLinksClicksSucceeded;
