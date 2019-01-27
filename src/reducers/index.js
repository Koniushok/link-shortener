// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import userReducers, { type State as UserState } from "./user";

export type State = {
  links: LinksState,
  user: UserState
};
const reducers = {
  links: linksReducers,
  user: userReducers
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
