// @flow
import { type LinksActions } from "./links";
import { type ProfileActions } from "./profile";
import { type AuthActions } from "./auth";

export type Actions = LinksActions | ProfileActions | AuthActions;
