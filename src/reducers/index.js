// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";

export type State = {
  links: LinksState
};
const reducers = {
  links: linksReducers
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
