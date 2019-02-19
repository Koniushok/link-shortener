// @flow
import {
  REGISTRY_FAILED,
  REGISTRY_REQUESTED,
  REGISTRY_SUCCEEDED,
  REGISTRY_RESET,
} from '../constants/actionTypes';
import { type RegistryActions } from '../actions/registry';

export type State = $ReadOnly<{
  error: string,
  loading: boolean,
}>;
const initialState: State = { error: '', loading: false };

const registryReducer = (state: State = initialState, action: RegistryActions): State => {
  switch (action.type) {
    case REGISTRY_REQUESTED:
      return {
        ...state,
        error: '',
        profile: null,
        loading: true,
      };
    case REGISTRY_SUCCEEDED:
      return { ...state, loading: false };
    case REGISTRY_FAILED:
      return { ...state, loading: false, error: action.payload };
    case REGISTRY_RESET:
      return initialState;
    default:
      return state;
  }
};

export default registryReducer;
