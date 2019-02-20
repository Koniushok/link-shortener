// @flow
import {
  LOGOUT, LOGIN, AUTH_DISABLE, AUTH_FAILED, AUTH_SUCCEEDED,
} from '../constants/actionTypes';

export type Login = {
  type: typeof LOGIN,
  payload: { password: string, loginName: string },
};
export type Logout = { type: typeof LOGOUT };
export type AuthDisable = { type: typeof AUTH_DISABLE };
export type AuthSuccess = {
  type: typeof AUTH_SUCCEEDED,
  payload: string,
};
export type AuthError = {
  type: typeof AUTH_FAILED,
};
export const login = (password: string, loginName: string): Login => ({
  type: LOGIN,
  payload: { password, loginName },
});
export const logout = (): Logout => ({ type: LOGOUT });
export const authDisable = (): AuthDisable => ({ type: AUTH_DISABLE });
export const authSuccess = (token: string): AuthSuccess => ({
  type: AUTH_SUCCEEDED,
  payload: token,
});
export const authError = (): AuthError => ({
  type: AUTH_FAILED,
});
export type AuthActions = Login | Logout | AuthDisable | AuthSuccess | AuthError;
