// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import linkReducers, { type State as LinkState } from "./link";

export type State = {
  links: LinksState,
  link: LinkState
};
const reducers = {
  links: linksReducers,
  link: linkReducers
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
