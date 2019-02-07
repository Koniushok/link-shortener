// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type EditLinkActions } from '../actions/editLink';
import { type Link } from '../types';

export type State = $ReadOnly<{
  error: string,
  loading: boolean,
  link: ?Link,
}>;
const initialState: State = {
  error: '',
  loading: false,
  link: null,
};

const editLinkReducer = (state: State = initialState, action: EditLinkActions): State => {
  switch (action.type) {
    case EDIT_LINK_REQUESTED:
      return {
        ...state,
        error: '',
        loading: true,
        link: null,
      };
    case EDIT_LINK_SUCCEEDED:
      return { ...state, loading: false, link: action.payload };
    case EDIT_LINK_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editLinkReducer;
