import { LINKS, FETCH_PROFILE } from "../constants/actionTypes";

export const links = {
  loadLinks: () => ({ type: LINKS.LOAD }),
  requestLinks: () => ({ type: LINKS.REQUESTED }),
  requestSuccess: data => ({
    type: LINKS.REQUESTED_SUCCEEDED,
    data
  }),
  requestError: error => ({ type: LINKS.REQUESTED_FAILED, error })
};

export const fetchProfile = () => ({ type: FETCH_PROFILE });
