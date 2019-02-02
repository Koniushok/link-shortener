// @flow
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_FAILED,
  CREATE_LINK_SUCCEEDED,
} from '../constants/actionTypes';
import { type LinkCreatorActions } from '../actions/linkCreator';

export type State = $ReadOnly<{
  result: string,
  error: string,
  loading: boolean,
}>;
const initialState: State = { result: '', error: '', loading: false };

const linkCreatorReducer = (state: State = initialState, action: LinkCreatorActions): State => {
  switch (action.type) {
    case CREATE_LINK_REQUESTED:
      return {
        ...state,
        result: '',
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
      return { ...state, result: action.payload, loading: false };
    default:
      return state;
  }
};

export default linkCreatorReducer;
