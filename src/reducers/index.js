// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import userReducers, { type State as UserState } from "./user";
import authReducers, { type State as AuthState } from "./auth";

export type State = {
  links: LinksState,
  user: UserState,
  auth: AuthState
};
const reducers = {
  links: linksReducers,
  user: userReducers,
  auth: authReducers
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
