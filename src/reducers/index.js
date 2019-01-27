// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import registryReducer, { type State as RegistryState } from "./registry";

export type State = {
  links: LinksState,
  registry: RegistryState
};
const reducers = {
  links: linksReducers,
  registry: registryReducer
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
