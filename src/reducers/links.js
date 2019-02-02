// @flow
import {
  LINKS_LOAD_FAILED,
  LINKS_LOAD_REQUESTED,
  LINKS_LOAD_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinksActions } from '../actions/links';
import { type Link } from '../types';

export type State = $ReadOnly<{
  data: ?Array<Link>,
  error: string,
  loading: boolean,
}>;
const initialState: State = { data: null, error: '', loading: false };

const linksReducer = (state: State = initialState, action: LinksActions): State => {
  switch (action.type) {
    case LINKS_LOAD_REQUESTED:
      return {
        ...state,
        data: null,
        error: '',
        loading: true,
      };
    case LINKS_LOAD_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LINKS_LOAD_SUCCEEDED:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default linksReducer;
