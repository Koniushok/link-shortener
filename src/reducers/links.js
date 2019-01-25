// @flow
import { LINKS } from "../constants/actionTypes";
import { type LinksActions } from "../actions/links";
import { type Link } from "../types";

export type State = {
  +data: ?Array<Link>,
  +error: string,
  +loading: boolean
};
const initialState: State = { data: null, error: "", loading: false };

const linksReducer = (
  state: State = initialState,
  action: LinksActions
): State => {
  switch (action.type) {
    case LINKS.REQUESTED:
      return { data: null, error: "", loading: true };
    case LINKS.REQUESTED_FAILED:
      return { data: state.data, error: action.payload, loading: false };
    case LINKS.REQUESTED_SUCCEEDED:
      return { data: action.payload, error: state.error, loading: false };
    default:
      return state;
  }
};

export default linksReducer;
