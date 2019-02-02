// @flow
import {
  LINKS_LOAD_SUCCEEDED,
  LINKS_LOAD_ALL,
  LINKS_LOAD_FAILED,
  LINKS_LOAD_MY,
  LINKS_LOAD_REQUESTED,
} from '../constants/actionTypes';
import { type Link } from '../types';

type LinksLoadMy = { type: typeof LINKS_LOAD_MY };
type LinksLoadAll = { type: typeof LINKS_LOAD_ALL };
type LinksLoadRequest = { type: typeof LINKS_LOAD_REQUESTED };
type LinksLoadSuccess = {
  type: typeof LINKS_LOAD_SUCCEEDED,
  payload: Array<Link>,
};
type LinksLoadError = { type: typeof LINKS_LOAD_FAILED, payload: string };

export const linksLoadMy = (): LinksLoadMy => ({ type: LINKS_LOAD_MY });
export const linksLoadAll = (): LinksLoadAll => ({ type: LINKS_LOAD_ALL });
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

export type LinksActions =
  | LinksLoadMy
  | LinksLoadAll
  | LinksLoadRequest
  | LinksLoadSuccess
  | LinksLoadError;
