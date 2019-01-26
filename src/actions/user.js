// @flow
import { USER } from "../constants/actionTypes";
import { type Profile } from "../types";

type Login = {
  type: typeof USER.LOGIN,
  payload: { password: string, loginName: string }
};
type Logout = { type: typeof USER.LOGOUT };
type LogoutSuccess = { type: typeof USER.LOGOUT_SUCCEEDED };
type Request = { type: typeof USER.REQUESTED };
type RequestSuccess = {
  type: typeof USER.REQUESTED_SUCCEEDED,
  payload: Profile
};
type RequestError = { type: typeof USER.REQUESTED_FAILED, payload: string };
export const login = (password: string, loginName: string): Login => ({
  type: USER.LOGIN,
  payload: { password, loginName }
});
export const logout = (): Logout => ({ type: USER.LOGOUT });
export const logoutSuccess = (): LogoutSuccess => ({
  type: USER.LOGOUT_SUCCEEDED
});
export const request = (): Request => ({ type: USER.REQUESTED });
export const requestSuccess = (profile: Profile): RequestSuccess => ({
  type: USER.REQUESTED_SUCCEEDED,
  payload: profile
});
export const requestError = (error: string): RequestError => ({
  type: USER.REQUESTED_FAILED,
  payload: error
});

export type UserActions =
  | Login
  | Logout
  | LogoutSuccess
  | Request
  | RequestSuccess
  | RequestError;
