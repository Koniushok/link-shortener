// @flow
import { type LinksActions } from "./links";
import { type ProfileActions } from "./user";
import { type AuthActions } from "./auth";

export type Actions = LinksActions | ProfileActions | AuthActions;
