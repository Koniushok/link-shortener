// @flow
import { type LinksActions } from "./links";
import { type ProfileActions } from "./profile";
import { type AuthActions } from "./auth";
import { type RegistryActions } from "./registry";

export type Actions =
  | LinksActions
  | ProfileActions
  | AuthActions
  | RegistryActions;
