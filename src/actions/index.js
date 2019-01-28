// @flow
import { type LinksActions } from "./links";
import { type UserActions } from "./user";
import { type AuthActions } from "./auth";

export type Actions = LinksActions | UserActions | AuthActions;
