// @flow
import {
  FETCH_LINK_FAILED,
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinkActions } from '../actions/fetchLink';
import { type Link } from '../types';

export type State = $ReadOnly<{
  data: ?Link,
  error: string,
  loading: boolean,
}>;
const initialState: State = {
  data: null,
  loading: false,
  error: '',
};

const linkReducer = (state: State = initialState, action: LinkActions): State => {
  switch (action.type) {
    case FETCH_LINK_REQUESTED:
      return { ...state, data: null, loading: true };
    case FETCH_LINK_FAILED:
      return { ...state, error: action.payload, loading: false };
    case FETCH_LINK_SUCCEEDED:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default linkReducer;
