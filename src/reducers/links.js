import { LINKS } from "../constants/actionTypes";

const initialState = { data: null, error: "", loading: false };

const linksReducer = (state = initialState, action) => {
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
