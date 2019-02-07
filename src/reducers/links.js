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
  error: string,
  loading: boolean,
}>;
const initialState: State = { data: null, error: '', loading: false };

const linksReducer = (state: State = initialState, action: Actions): State => {
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
