// @flow
import { REGISTRY_FAILED, REGISTRY_REQUESTED, REGISTRY_SUCCEEDED } from '../constants/actionTypes';
import { type RegistryProfile } from '../types';

export type RegistryRequest = {
  type: typeof REGISTRY_REQUESTED,
  payload: RegistryProfile,
};
type RegistrySuccess = {
  type: typeof REGISTRY_SUCCEEDED,
  payload: string,
};
type RegistryError = { type: typeof REGISTRY_FAILED };

export const registryRequest = (profile: RegistryProfile): RegistryRequest => ({
  type: REGISTRY_REQUESTED,
  payload: profile,
});
export const registrySuccess = (token: string): RegistrySuccess => ({
  type: REGISTRY_SUCCEEDED,
  payload: token,
});
export const registryError = (): RegistryError => ({
  type: REGISTRY_FAILED,
});

export type RegistryActions = RegistryRequest | RegistrySuccess | RegistryError;
