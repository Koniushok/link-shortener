// @flow
import { SAVE_PROFILE, CLEAR_PROFILE } from "../constants/actionTypes";
import { type ProfileActions } from "../actions/profile";
import { type Profile } from "../types";

export type State = ?Profile;
const initialState: State = null;

const profileReducer = (
  state: State = initialState,
  action: ProfileActions
): State => {
  switch (action.type) {
    case SAVE_PROFILE:
      return action.payload;
    case CLEAR_PROFILE:
      return null;
    default:
      return state;
  }
};

export default profileReducer;
