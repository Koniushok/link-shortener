import {
  createLinkRequested,
  createLinkSucceeded,
  createLinkFailed,
  createLinkReset,
} from '../../src/actions/linkCreator';
import {
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCEEDED,
  CREATE_LINK_FAILED,
  CREATE_LINK_RESET,
} from '../../src/constants/actionTypes';

describe('linkCreator action', () => {
  const link = {
    id: 'testID',
    title: 'testTitle',
    url: 'testUrl',
    shortLink: 'tUrl',
    clicks: 1,
    tags: ['test', 'test2'],
    description: 'myTest',
  };
  const linkCreate = {
    title: 'testTitle',
    url: 'testUrl',
    description: 'testD',
    tags: ['1', '2'],
  };
  it('actionCreator createLinkRequested', () => {
    const expectedAction = {
      type: CREATE_LINK_REQUESTED,
      payload: linkCreate,
    };
    expect(createLinkRequested(linkCreate)).toEqual(expectedAction);
  });
  it('actionCreator createLinkSucceeded', () => {
    const expectedAction = {
      type: CREATE_LINK_SUCCEEDED,
      payload: link,
    };
    expect(createLinkSucceeded(link)).toEqual(expectedAction);
  });
  it('actionCreator createLinkFailed', () => {
    const expectedAction = { type: CREATE_LINK_FAILED };
    expect(createLinkFailed()).toEqual(expectedAction);
  });
  it('actionCreator createLinkReset', () => {
    const expectedAction = { type: CREATE_LINK_RESET };
    expect(createLinkReset()).toEqual(expectedAction);
  });
});
