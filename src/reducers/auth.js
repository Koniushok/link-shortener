// @flow
import {
  AUTH_DISABLE,
  AUTH_FAILED,
  AUTH_REQUESTED,
  AUTH_SUCCEEDED
} from "../constants/actionTypes";
import { type AuthActions } from "../actions/auth";

export type State = {
  status: boolean,
  error: string,
  loading: boolean
};
const initialState: State = {
  status: false,
  error: "",
  loading: false
};

const userReducer = (
  state: State = initialState,
  action: AuthActions
): State => {
  switch (action.type) {
    case AUTH_REQUESTED:
      return { status: false, error: "", loading: true };
    case AUTH_SUCCEEDED:
      return { ...state, status: true, loading: false };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case AUTH_DISABLE:
      return { ...state, status: false };
    default:
      return state;
  }
};

export default userReducer;
