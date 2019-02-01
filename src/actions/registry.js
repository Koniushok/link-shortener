// @flow
import {
  REGISTRY_FAILED,
  REGISTRY_REQUESTED,
  REGISTRY_SUCCEEDED
} from "../constants/actionTypes";
import { type RegistryProfile } from "../types";

export type RegistryRequest = {
  type: typeof REGISTRY_REQUESTED,
  payload: RegistryProfile
};
type RegistrySuccess = {
  type: typeof REGISTRY_SUCCEEDED,
  payload: string
};
type RegistryError = { type: typeof REGISTRY_FAILED, payload: string };

export const registryRequest = (profile: RegistryProfile): RegistryRequest => ({
  type: REGISTRY_REQUESTED,
  payload: profile
});
export const registrySuccess = (result: string): RegistrySuccess => ({
  type: REGISTRY_SUCCEEDED,
  payload: result
});
export const registryError = (error: string): RegistryError => ({
  type: REGISTRY_FAILED,
  payload: error
});
export type RegistryActions = RegistryRequest | RegistrySuccess | RegistryError;
