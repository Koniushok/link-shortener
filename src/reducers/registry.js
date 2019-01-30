// @flow
import {
  REGISTRY_FAILED,
  REGISTRY_REQUESTED,
  REGISTRY_SUCCEEDED
} from "../constants/actionTypes";
import { type RegistryActions } from "../actions/registry";

export type State = {
  +error: string,
  +loading: boolean,
  +result: string
};
const initialState: State = { error: "", result: "", loading: false };

const registryReducer = (
  state: State = initialState,
  action: RegistryActions
): State => {
  switch (action.type) {
    case REGISTRY_REQUESTED:
      return { ...state, error: "", result: "", loading: true };
    case REGISTRY_SUCCEEDED:
      return { ...state, loading: false, result: action.payload };
    case REGISTRY_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registryReducer;
