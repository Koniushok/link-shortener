// @flow
import { REGISTRY } from "../constants/actionTypes";
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
    case REGISTRY.REQUESTED:
      return { error: "", result: "", loading: true };
    case REGISTRY.REQUESTED_SUCCEEDED:
      return { ...state, loading: false, result: action.payload };
    case REGISTRY.REQUESTED_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registryReducer;
