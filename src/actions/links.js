// @flow
import {
  LINKS_LOAD_SUCCEEDED,
  LINKS_LOAD_ALL,
  LINKS_LOAD_FAILED,
  LINKS_LOAD_MY,
  LINKS_LOAD_REQUESTED,
  LINKS_LOAD_RESET,
} from '../constants/actionTypes';
import { type Link } from '../types';

type LinksLoadMy = { type: typeof LINKS_LOAD_MY, payload?: string };
type LinksLoadAll = { type: typeof LINKS_LOAD_ALL, payload?: string };
type LinksLoadRequest = { type: typeof LINKS_LOAD_REQUESTED };
type LinksLoadSuccess = {
  type: typeof LINKS_LOAD_SUCCEEDED,
  payload: Array<Link>,
};
type LinksLoadError = { type: typeof LINKS_LOAD_FAILED, payload: string };
type LinksLoadReset = { type: typeof LINKS_LOAD_RESET };

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

export type LinksActions =
  | LinksLoadMy
  | LinksLoadAll
  | LinksLoadRequest
  | LinksLoadSuccess
  | LinksLoadError
  | LinksLoadReset;
