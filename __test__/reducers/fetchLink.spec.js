import reducer from '../../src/reducers/fetchLink';
import { fetchLinkRequest, fetchLinkSuccess, fetchLinkError } from '../../src/actions/fetchLink';

describe('reducer fetchLink', () => {
  const initialState = {
    error: false,
    data: null,
    loading: false,
  };
  const link = {
    id: 'testID',
    title: 'testTitle',
    url: 'testUrl',
    shortLink: 'tUrl',
    clicks: 1,
    tags: ['test', 'test2'],
    description: 'myTest',
  };
  it('reducer for FETCH_LINK_REQUESTED', () => {
    const state = reducer(undefined, fetchLinkRequest());
    expect(state).toEqual({ ...initialState, loading: true });
  });
  it('reducer for FETCH_LINK_SUCCEEDED', () => {
    const state = reducer(undefined, fetchLinkSuccess(link));
    expect(state).toEqual({ ...initialState, data: link });
  });
  it('reducer for FETCH_LINK_FAILED', () => {
    const state = reducer(undefined, fetchLinkError());
    expect(state).toEqual({ ...initialState, error: true });
  });
  it('reducer for default', () => {
    const state = reducer(initialState, { type: 'default' });
    expect(state).toEqual(initialState);
  });
});
