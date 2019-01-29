// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import profileReducers, { type State as ProfileState } from "./user";
import authReducers, { type State as AuthState } from "./auth";

export type State = {
  links: LinksState,
  profile: ProfileState,
  auth: AuthState
};
const reducers = {
  links: linksReducers,
  profile: profileReducers,
  auth: authReducers
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
