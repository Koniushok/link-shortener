// @flow
import { type LinksActions } from "./links";
import { type AuthActions } from "./auth";
import { type RegistryActions } from "./registry";
import { type LinkCreatorActions } from "./linkCreator";
import { type LinkActions } from "./fetchLink";
import { type EditLinkActions } from "./editLink";

export type Actions =
  | LinksActions
  | AuthActions
  | RegistryActions
  | LinkCreatorActions
  | LinkActions
  | EditLinkActions;
