// @flow
import {
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCEEDED,
} from '../constants/actionTypes';
import { type FetchProfileActions } from '../actions/fetchProfile';
import { type Profile } from '../types';

export type State = $ReadOnly<{
  profile: ?Profile,
  loading: boolean,
}>;
const initialState: State = {
  profile: null,
  loading: false,
};

const fetchProfileReducer = (state: State = initialState, action: FetchProfileActions): State => {
  switch (action.type) {
    case FETCH_PROFILE_REQUESTED:
      return { ...state, data: null, loading: true };
    case FETCH_PROFILE_FAILED:
      return { ...state, loading: false };
    case FETCH_PROFILE_SUCCEEDED:
      return { ...state, profile: action.payload, loading: false };
    default:
      return state;
  }
};

export default fetchProfileReducer;
