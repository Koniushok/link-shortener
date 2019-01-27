// @flow
import { REGISTRY } from "../constants/actionTypes";
import { type RegistryProfile } from "../types";

export type CreateProfile = {
  type: typeof REGISTRY.CREATE_PROFILE,
  payload: RegistryProfile
};
type Request = { type: typeof REGISTRY.REQUESTED };
type RequestSuccess = {
  type: typeof REGISTRY.REQUESTED_SUCCEEDED,
  payload: string
};
type RequestError = { type: typeof REGISTRY.REQUESTED_FAILED, payload: string };

export const createProfile = (profile: RegistryProfile): CreateProfile => ({
  type: REGISTRY.CREATE_PROFILE,
  payload: profile
});
export const request = (): Request => ({ type: REGISTRY.REQUESTED });
export const requestSuccess = (result: string): RequestSuccess => ({
  type: REGISTRY.REQUESTED_SUCCEEDED,
  payload: result
});
export const requestError = (error: string): RequestError => ({
  type: REGISTRY.REQUESTED_FAILED,
  payload: error
});
export type RegistryActions =
  | RequestError
  | CreateProfile
  | Request
  | RequestSuccess;
