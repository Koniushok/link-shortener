import { fetchLinkRequest, fetchLinkSuccess, fetchLinkError } from '../../src/actions/fetchLink';
import {
  FETCH_LINK_REQUESTED,
  FETCH_LINK_SUCCEEDED,
  FETCH_LINK_FAILED,
} from '../../src/constants/actionTypes';

describe('fetchLink action', () => {
  const link = {
    id: 'testID',
    title: 'testTitle',
    url: 'testUrl',
    shortLink: 'tUrl',
    clicks: 1,
    tags: ['test', 'test2'],
    description: 'myTest',
  };
  it('actionCreator fetchLinkRequest', () => {
    const expectedAction = { type: FETCH_LINK_REQUESTED, payload: 'testId' };
    expect(fetchLinkRequest('testId')).toEqual(expectedAction);
  });
  it('actionCreator fetchLinkSuccess', () => {
    const expectedAction = { type: FETCH_LINK_SUCCEEDED, payload: link };
    expect(fetchLinkSuccess(link)).toEqual(expectedAction);
  });
  it('actionCreator fetchLinkError', () => {
    const expectedAction = { type: FETCH_LINK_FAILED };
    expect(fetchLinkError()).toEqual(expectedAction);
  });
});
