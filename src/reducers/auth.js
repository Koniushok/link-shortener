// @flow
import {
  LOGIN,
  AUTH_DISABLE,
  AUTH_FAILED,
  AUTH_SUCCEEDED,
  AUTH_RESET_ERROR,
  REGISTRY_SUCCEEDED,
} from '../constants/actionTypes';
import { type Actions } from '../actions';

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

const authReducer = (state: State = initialState, action: Actions): State => {
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
    case AUTH_RESET_ERROR:
      return { ...state, error: '' };
    case REGISTRY_SUCCEEDED:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
