// @flow
import { SAVE_USER, CLEAR_USER } from "../constants/actionTypes";
import { type UserActions } from "../actions/user";
import { type Profile } from "../types";

export type State = ?Profile;
const initialState: State = null;

const userReducer = (
  state: State = initialState,
  action: UserActions
): State => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
