// @flow
import {
  LOGIN, AUTH_DISABLE, AUTH_FAILED, AUTH_SUCCEEDED,
} from '../constants/actionTypes';
import { type AuthActions } from '../actions/auth';

export type State = $ReadOnly<{
  token: string,
  error: string,
  loading: boolean,
}>;
const initialState: State = {
  token: '',
  error: '',
  loading: false,
};

const authReducer = (state: State = initialState, action: AuthActions): State => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: '',
        error: '',
        loading: true,
      };
    case AUTH_SUCCEEDED:
      return { ...state, token: action.payload, loading: false };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_DISABLE:
      return { ...state, token: '' };
    default:
      return state;
  }
};

export default authReducer;
