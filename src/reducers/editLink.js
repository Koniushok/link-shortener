// @flow
import {
  EDIT_LINK_FAILED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type EditLinkActions } from '../actions/editLink';

export type State = {
  +error: string,
  +loading: boolean,
  +result: string,
};
const initialState: State = {
  error: '',
  loading: false,
  result: '',
};

const editLinkReducer = (state: State = initialState, action: EditLinkActions): State => {
  switch (action.type) {
    case EDIT_LINK_REQUESTED:
      return {
        ...state, error: '', loading: true, result: '',
      };
    case EDIT_LINK_SUCCEEDED:
      return { ...state, loading: false, result: action.payload };
    case EDIT_LINK_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editLinkReducer;
