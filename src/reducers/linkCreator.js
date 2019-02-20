// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_FAILED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_RESET,
} from '../constants/actionTypes';
import { type LinkCreatorActions } from '../actions/linkCreator';
import { type Link } from '../types';

export type State = $ReadOnly<{
  link: ?Link,
  loading: boolean,
}>;
const initialState: State = { link: null, loading: false };

const linkCreatorReducer = (state: State = initialState, action: LinkCreatorActions): State => {
  switch (action.type) {
    case CREATE_LINK_REQUESTED:
      return { ...state, link: null, loading: true };
    case CREATE_LINK_FAILED:
      return { ...state, loading: false };
    case CREATE_LINK_SUCCEEDED:
      return { ...state, link: action.payload, loading: false };
    case CREATE_LINK_RESET:
      return initialState;
    default:
      return state;
  }
};

export default linkCreatorReducer;
