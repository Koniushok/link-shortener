import reducer from '../../src/reducers/linkCreator';
import {
  createLinkRequested,
  createLinkSucceeded,
  createLinkFailed,
  createLinkReset,
} from '../../src/actions/linkCreator';

describe('reducer fetchLink', () => {
  const initialState = {
    link: null,
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
  it('reducer for CREATE_LINK_REQUESTED', () => {
    const state = reducer(undefined, createLinkRequested());
    expect(state).toEqual({ ...initialState, loading: true });
  });
  it('reducer for CREATE_LINK_SUCCEEDED', () => {
    const state = reducer(undefined, createLinkSucceeded(link));
    expect(state).toEqual({ ...initialState, link });
  });
  it('reducer for CREATE_LINK_FAILED', () => {
    const state = reducer(undefined, createLinkFailed());
    expect(state).toEqual({ ...initialState, loading: false });
  });
  it('reducer for CREATE_LINK_RESET', () => {
    const state = reducer(undefined, createLinkReset());
    expect(state).toEqual(initialState);
  });
  it('reducer for default', () => {
    const state = reducer(initialState, { type: 'default' });
    expect(state).toEqual(initialState);
  });
});
