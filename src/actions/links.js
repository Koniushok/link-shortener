// @flow
import {
  LINKS_LOAD_SUCCEEDED,
  LINKS_LOAD_ALL,
  LINKS_LOAD_FAILED,
  LINKS_LOAD_MY,
  LINKS_LOAD_REQUESTED,
} from '../constants/actionTypes';
import { type Link } from '../types';

type LinksLoadMy = { type: typeof LINKS_LOAD_MY, payload: string };
type LinksLoadAll = { type: typeof LINKS_LOAD_ALL, payload: string };
type LinksLoadRequest = { type: typeof LINKS_LOAD_REQUESTED };
type LinksLoadSuccess = {
  type: typeof LINKS_LOAD_SUCCEEDED,
  payload: { links: Array<Link>, lickCount: number },
};
type LinksLoadError = { type: typeof LINKS_LOAD_FAILED };

export const linksLoadMy = (search: string): LinksLoadMy => ({
  type: LINKS_LOAD_MY,
  payload: search,
});
export const linksLoadAll = (search: string): LinksLoadAll => ({
  type: LINKS_LOAD_ALL,
  payload: search,
});
export const linksLoadRequest = (): LinksLoadRequest => ({
  type: LINKS_LOAD_REQUESTED,
});
export const linksLoadSuccess = (links: Array<Link>, lickCount: number): LinksLoadSuccess => ({
  type: LINKS_LOAD_SUCCEEDED,
  payload: { links, lickCount },
});
export const linksLoadError = (): LinksLoadError => ({
  type: LINKS_LOAD_FAILED,
});

export type LinksActions =
  | LinksLoadMy
  | LinksLoadAll
  | LinksLoadRequest
  | LinksLoadSuccess
  | LinksLoadError;
