// @flow
import {
  DELETE_LINK_FAILED,
  DELETE_LINK_REQUESTED,
  DELETE_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type DeleteLinkActions } from '../actions/deleteLink';
import { type Link } from '../types';

export type State = $ReadOnly<{
  deletedLink: ?Link,
  error: string,
  loading: boolean,
}>;
const initialState: State = {
  deletedLink: null,
  error: '',
  loading: false,
};

const deleteLinkReducer = (state: State = initialState, action: DeleteLinkActions): State => {
  switch (action.type) {
    case DELETE_LINK_REQUESTED:
      return { ...state, deletedLink: null, loading: true };
    case DELETE_LINK_FAILED:
      return { ...state, error: action.payload, loading: false };
    case DELETE_LINK_SUCCEEDED:
      return { ...state, deletedLink: action.payload, loading: false };
    default:
      return state;
  }
};

export default deleteLinkReducer;
