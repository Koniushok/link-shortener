// @flow
import { combineReducers, type CombinedReducer } from 'redux';
import type { Actions } from '../actions';
import linksReducers, { type State as LinksState } from './links';
import authReducers, { type State as AuthState } from './auth';
import registryReducer, { type State as RegistryState } from './registry';
import linkCreatorReducer, { type State as LinkCreatorState } from './linkCreator';
import fetchLinkReducer, { type State as FetchLinkState } from './fetchLink';
import editLinkReducer, { type State as EditLinkState } from './editLink';
import deleteLinkReducer, { type State as DeleteLinkState } from './deleteLink';

export type State = {
  links: LinksState,
  auth: AuthState,
  registry: RegistryState,
  linkCreator: LinkCreatorState,
  fetchLink: FetchLinkState,
  editLink: EditLinkState,
  deleteLink: DeleteLinkState,
};
const reducers = {
  links: linksReducers,
  auth: authReducers,
  registry: registryReducer,
  linkCreator: linkCreatorReducer,
  fetchLink: fetchLinkReducer,
  editLink: editLinkReducer,
  deleteLink: deleteLinkReducer,
};

const rootReducers: CombinedReducer<State, Actions> = combineReducers(reducers);

export default rootReducers;
