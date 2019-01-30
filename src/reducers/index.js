// @flow
import { combineReducers, type CombinedReducer } from "redux";
import type { Actions } from "../actions";
import linksReducers, { type State as LinksState } from "./links";
import profileReducers, { type State as ProfileState } from "./profile";
import authReducers, { type State as AuthState } from "./auth";
import registryReducer, { type State as RegistryState } from "./registry";
import linkCreatorReducer, {
  type State as linkCreatorState
} from "./linkCreator";

export type State = {
  links: LinksState,
  profile: ProfileState,
  auth: AuthState,
  registry: RegistryState,
  linkCreator: linkCreatorState
};
const reducers = {
  links: linksReducers,
  profile: profileReducers,
  auth: authReducers,
  registry: registryReducer,
  linkCreator: linkCreatorReducer
};

const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
