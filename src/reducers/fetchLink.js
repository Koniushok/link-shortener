// @flow
import {
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinkActions } from '../actions/fetchLink';
import { type Link } from '../types';

export type State = $ReadOnly<{
  error: boolean,
  data: ?Link,
  loading: boolean,
}>;
const initialState: State = {
  error: false,
  data: null,
  loading: false,
};

const linkReducer = (state: State = initialState, action: LinkActions): State => {
  switch (action.type) {
    case FETCH_LINK_REQUESTED:
      return { ...state, data: null, loading: true };
    case FETCH_LINK_FAILED:
      return { ...state, loading: false, error: true };
    case FETCH_LINK_SUCCEEDED:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default linkReducer;
