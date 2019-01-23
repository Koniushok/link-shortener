// @flow
import { LINKS } from "../constants/actionTypes";
import { type LinksActions } from "../actions";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};
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
      return { data: null, error: action.error, loading: false };
    case LINKS.REQUESTED_SUCCEEDED:
      return { data: action.data, error: "", loading: false };
    default:
      return state;
  }
};

export default linksReducer;
