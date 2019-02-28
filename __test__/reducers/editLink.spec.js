import reducer from '../../src/reducers/editLink';
import {
  editLinkRequested,
  editLinkSucceeded,
  editLinkFailed,
  editLinkReset,
} from '../../src/actions/editLink';

describe('reducer fetchLink', () => {
  const initialState = {
    loading: false,
    link: null,
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
  it('reducer for EDIT_LINK_REQUESTED', () => {
    const state = reducer(undefined, editLinkRequested());
    expect(state).toEqual({ ...initialState, loading: true });
  });
  it('reducer for EDIT_LINK_SUCCEEDED', () => {
    const state = reducer(undefined, editLinkSucceeded(link));
    expect(state).toEqual({ ...initialState, link });
  });
  it('reducer for EDIT_LINK_FAILED', () => {
    const state = reducer(undefined, editLinkFailed());
    expect(state).toEqual({ ...initialState, loading: false });
  });
  it('reducer for EDIT_LINK_RESET', () => {
    const state = reducer(undefined, editLinkReset());
    expect(state).toEqual(initialState);
  });
  it('reducer for default', () => {
    const state = reducer(initialState, { type: 'default' });
    expect(state).toEqual(initialState);
  });
});
