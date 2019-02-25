// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
  EDIT_LINK_RESET,
} from '../constants/actionTypes';
import { type EditLinkActions } from '../actions/editLink';
import { type Link } from '../types';

export type State = $ReadOnly<{
  loading: boolean,
  link: ?Link,
}>;
const initialState: State = {
  loading: false,
  link: null,
};

const editLinkReducer = (state: State = initialState, action: EditLinkActions): State => {
  switch (action.type) {
    case EDIT_LINK_REQUESTED:
      return { ...state, loading: true, link: null };
    case EDIT_LINK_SUCCEEDED:
      return { ...state, loading: false, link: action.payload };
    case EDIT_LINK_FAILED:
      return { ...state, loading: false };
    case EDIT_LINK_RESET:
      return initialState;
    default:
      return state;
  }
};

export default editLinkReducer;
