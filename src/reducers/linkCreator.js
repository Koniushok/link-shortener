// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_FAILED,
  CREATE_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinkCreatorActions } from '../actions/linkCreator';
import { type Link } from '../types';

export type State = $ReadOnly<{
  link: ?Link,
  error: string,
  loading: boolean,
}>;
const initialState: State = { error: '', link: null, loading: false };

const linkCreatorReducer = (state: State = initialState, action: LinkCreatorActions): State => {
  switch (action.type) {
    case CREATE_LINK_REQUESTED:
      return {
        ...state,
        link: null,
        error: '',
        loading: true,
      };
    case CREATE_LINK_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_LINK_SUCCEEDED:
      return { ...state, link: action.payload, loading: false };
    default:
      return state;
  }
};

export default linkCreatorReducer;
