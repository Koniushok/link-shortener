// @flow
import {
  REGISTRY,
  REGISTRY_FAILED,
  REGISTRY_REQUESTED,
  REGISTRY_SUCCEEDED
} from "../constants/actionTypes";
import { type RegistryProfile } from "../types";

export type Registry = {
  type: typeof REGISTRY,
  payload: RegistryProfile
};
type RegistryRequest = { type: typeof REGISTRY_REQUESTED };
type RegistrySuccess = {
  type: typeof REGISTRY_SUCCEEDED,
  payload: string
};
type RegistryError = { type: typeof REGISTRY_FAILED, payload: string };

export const registry = (profile: RegistryProfile): Registry => ({
  type: REGISTRY,
  payload: profile
});
export const registryRequest = (): RegistryRequest => ({
  type: REGISTRY_REQUESTED
});
export const registrySuccess = (result: string): RegistrySuccess => ({
  type: REGISTRY_SUCCEEDED,
  payload: result
});
export const registryError = (error: string): RegistryError => ({
  type: REGISTRY_FAILED,
  payload: error
});
export type RegistryActions =
  | Registry
  | RegistryRequest
  | RegistrySuccess
  | RegistryError;
