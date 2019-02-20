// @flow
import {
  LINKS_LOAD_FAILED,
  LINKS_LOAD_REQUESTED,
  LINKS_LOAD_SUCCEEDED,
  EDIT_LINK_SUCCEEDED,
  DELETE_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type Actions } from '../actions';
import { type Link } from '../types';

export type State = $ReadOnly<{
  data: ?Array<Link>,
  loading: boolean,
  linkCount: number,
}>;
const initialState: State = {
  data: null,
  loading: false,
  linkCount: 0,
};

const linksReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case LINKS_LOAD_REQUESTED:
      return { ...state, loading: true };
    case LINKS_LOAD_FAILED:
      return { ...state, loading: false };
    case LINKS_LOAD_SUCCEEDED:
      return {
        ...state,
        data: action.payload.links,
        loading: false,
        linkCount: action.payload.lickCount,
      };
    case EDIT_LINK_SUCCEEDED: {
      const editLink = action.payload;
      const links = state.data
        ? state.data.map(link => (link.id === editLink.id ? editLink : link))
        : state.data;
      return { ...state, data: links };
    }
    case DELETE_LINK_SUCCEEDED: {
      const deletedLink = action.payload;
      const links = state.data ? state.data.filter(link => link.id !== deletedLink.id) : state.data;
      return { ...state, data: links };
    }
    default:
      return state;
  }
};

export default linksReducer;
