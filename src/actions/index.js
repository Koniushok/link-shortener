// @flow
import { type LinksActions } from './links';
import { type ProfileActions } from './profile';
import { type AuthActions } from './auth';
import { type RegistryActions } from './registry';
import { type LinkCreatorActions } from './linkCreator';
import { type LinkActions } from './link';
import { type EditLinkActions } from './editLink';

export type Actions =
  | LinksActions
  | ProfileActions
  | AuthActions
  | RegistryActions
  | LinkCreatorActions
  | LinkActions
  | EditLinkActions;
