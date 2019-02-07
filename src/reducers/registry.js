// @flow
import { REGISTRY_FAILED, REGISTRY_REQUESTED, REGISTRY_SUCCEEDED } from '../constants/actionTypes';
import { type RegistryActions } from '../actions/registry';
import { type Profile } from '../types';

export type State = $ReadOnly<{
  error: string,
  loading: boolean,
  profile: ?Profile,
}>;
const initialState: State = { error: '', profile: null, loading: false };

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
      return { ...state, loading: false, profile: action.payload };
    case REGISTRY_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registryReducer;
