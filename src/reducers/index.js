// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import linkCreatorReducer, {
  type State as linkCreatorState
} from "./linkCreator";

export type State = {
  links: LinksState,
  linkCreator: linkCreatorState
};
const reducers = {
  links: linksReducers,
  linkCreator: linkCreatorReducer
};
const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
