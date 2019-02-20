// @flow
import { REGISTRY_FAILED, REGISTRY_REQUESTED, REGISTRY_SUCCEEDED } from '../constants/actionTypes';
import { type RegistryActions } from '../actions/registry';

export type State = boolean;

const initialState: State = false;

const registryReducer = (state: State = initialState, action: RegistryActions): State => {
  switch (action.type) {
    case REGISTRY_REQUESTED:
      return true;
    case REGISTRY_SUCCEEDED:
      return false;
    case REGISTRY_FAILED:
      return false;
    default:
      return state;
  }
};

export default registryReducer;
