// @flow
import {
  REGISTRY_FAILED,
  REGISTRY_REQUESTED,
  REGISTRY_SUCCEEDED,
  REGISTRY_RESET,
} from '../constants/actionTypes';
import { type RegistryProfile, type Profile } from '../types';

export type RegistryRequest = {
  type: typeof REGISTRY_REQUESTED,
  payload: RegistryProfile,
};
type RegistrySuccess = {
  type: typeof REGISTRY_SUCCEEDED,
  payload: Profile,
};
type RegistryError = { type: typeof REGISTRY_FAILED, payload: string };
type RegistryReset = { type: typeof REGISTRY_RESET };

export const registryRequest = (profile: RegistryProfile): RegistryRequest => ({
  type: REGISTRY_REQUESTED,
  payload: profile,
});
export const registrySuccess = (profile: Profile): RegistrySuccess => ({
  type: REGISTRY_SUCCEEDED,
  payload: profile,
});
export const registryError = (error: string): RegistryError => ({
  type: REGISTRY_FAILED,
  payload: error,
});
export const registryReset = (): RegistryReset => ({
  type: REGISTRY_RESET,
});
export type RegistryActions = RegistryRequest | RegistrySuccess | RegistryError | RegistryReset;
