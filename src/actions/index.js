// @flow
import { type LinksActions } from "./links";
import { type ProfileActions } from "./profile";
import { type AuthActions } from "./auth";
import { type RegistryActions } from "./registry";
import { type LinkCreatorActions } from "./linkCreator";

export type Actions =
  | LinksActions
  | ProfileActions
  | AuthActions
  | RegistryActions
  | LinkCreatorActions;
