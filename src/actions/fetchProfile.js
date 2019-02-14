// @flow
import {
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCEEDED,
} from '../constants/actionTypes';
import { type Profile } from '../types';

type FetchProfileRequest = {
  type: typeof FETCH_PROFILE_REQUESTED,
};
type FetchProfileSuccess = {
  type: typeof FETCH_PROFILE_SUCCEEDED,
  payload: Profile,
};
type FetchProfileError = { type: typeof FETCH_PROFILE_FAILED, payload: string };

export const fetchProfileRequest = (): FetchProfileRequest => ({
  type: FETCH_PROFILE_REQUESTED,
});
export const fetchProfileSuccess = (profile: Profile): FetchProfileSuccess => ({
  type: FETCH_PROFILE_SUCCEEDED,
  payload: profile,
});
export const fetchProfileError = (error: string): FetchProfileError => ({
  type: FETCH_PROFILE_FAILED,
  payload: error,
});

export type FetchProfileActions = FetchProfileRequest | FetchProfileSuccess | FetchProfileError;
