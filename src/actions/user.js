// @flow
import { CLEAR_USER, SAVE_USER } from "../constants/actionTypes";
import { type Profile } from "../types";

export type ClearUser = { type: typeof CLEAR_USER };
export type SaveUser = { type: typeof SAVE_USER, payload: Profile };
export const clearUser = (): ClearUser => ({ type: CLEAR_USER });
export const saveUser = (profile: Profile): SaveUser => ({
  type: SAVE_USER,
  payload: profile
});

export type UserActions = ClearUser | SaveUser;
