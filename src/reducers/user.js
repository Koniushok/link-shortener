// @flow
import { USER } from "../constants/actionTypes";
import { type UserActions } from "../actions/user";
import { type Profile } from "../types";

export type State = {
  auth: boolean,
  error: string,
  loading: boolean,
  profile: ?Profile
};
const initialState: State = {
  auth: false,
  error: "",
  loading: false,
  profile: null
};

const userReducer = (
  state: State = initialState,
  action: UserActions
): State => {
  switch (action.type) {
    case USER.REQUESTED:
      return { auth: false, error: "", loading: true, profile: null };
    case USER.REQUESTED_SUCCEEDED:
      return {
        ...state,
        auth: true,
        loading: false,
        profile: action.payload
      };
    case USER.REQUESTED_FAILED:
      return { ...state, error: action.payload, loading: false };
    case USER.LOGOUT_SUCCEEDED:
      return { ...state, profile: null, auth: false };
    default:
      return state;
  }
};

export default userReducer;
