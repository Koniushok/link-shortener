// @flow
import { CLEAR_PROFILE, SAVE_PROFILE } from '../constants/actionTypes';
import { type Profile } from '../types';

export type ClearProfile = { type: typeof CLEAR_PROFILE };
export type SaveProfile = { type: typeof SAVE_PROFILE, payload: Profile };
export const clearProfile = (): ClearProfile => ({ type: CLEAR_PROFILE });
export const saveProfile = (profile: Profile): SaveProfile => ({
  type: SAVE_PROFILE,
  payload: profile,
});

export type ProfileActions = ClearProfile | SaveProfile;
