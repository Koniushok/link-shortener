// @flow
import {
  LOGIN,
  AUTH_DISABLE,
  AUTH_FAILED,
  AUTH_SUCCEEDED,
  REGISTRY_SUCCEEDED,
} from '../constants/actionTypes';
import { type Actions } from '../actions';

export type State = $ReadOnly<{
  token: string,
  loading: boolean,
}>;
const initialState: State = {
  token: '',
  loading: false,
};

const authReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: '', loading: true };
    case AUTH_SUCCEEDED:
      return { ...state, token: action.payload, loading: false };
    case AUTH_FAILED:
      return { ...state, loading: false };
    case AUTH_DISABLE:
      return { ...state, token: '' };
    case REGISTRY_SUCCEEDED:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
