// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import authReducers, { type State as AuthState } from "./auth";
import registryReducer, { type State as RegistryState } from "./registry";
import linkCreatorReducer, {
  type State as linkCreatorState
} from "./linkCreator";
import linkReducers, { type State as LinkState } from "./fetchLink";
import editLinkReducers, { type State as EditLinkState } from "./editLink";

export type State = {
  links: LinksState,
  auth: AuthState,
  registry: RegistryState,
  linkCreator: linkCreatorState,
  link: LinkState,
  editLink: EditLinkState
};
const reducers = {
  links: linksReducers,
  auth: authReducers,
  registry: registryReducer,
  linkCreator: linkCreatorReducer,
  link: linkReducers,
  editLink: editLinkReducers
};

const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
