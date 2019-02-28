import {
  editLinkRequested,
  editLinkSucceeded,
  editLinkFailed,
  editLinkReset,
} from '../../src/actions/editLink';
import {
  EDIT_LINK_REQUESTED,
  EDIT_LINK_SUCCEEDED,
  EDIT_LINK_FAILED,
  EDIT_LINK_RESET,
} from '../../src/constants/actionTypes';

describe('editLink action', () => {
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
  it('actionCreator editLinkRequested', () => {
    const expectedAction = {
      type: EDIT_LINK_REQUESTED,
      payload: { linkID: 'linkID', link: linkCreate },
    };
    expect(editLinkRequested('linkID', linkCreate)).toEqual(expectedAction);
  });
  it('actionCreator editLinkSucceeded', () => {
    const expectedAction = {
      type: EDIT_LINK_SUCCEEDED,
      payload: link,
    };
    expect(editLinkSucceeded(link)).toEqual(expectedAction);
  });
  it('actionCreator editLinkFailed', () => {
    const expectedAction = { type: EDIT_LINK_FAILED };
    expect(editLinkFailed()).toEqual(expectedAction);
  });
  it('actionCreator editLinkReset', () => {
    const expectedAction = { type: EDIT_LINK_RESET };
    expect(editLinkReset()).toEqual(expectedAction);
  });
});
