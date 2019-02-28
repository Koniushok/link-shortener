import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  FETCH_LINK_REQUESTED,
  EDIT_LINK_REQUESTED,
  EDIT_LINK_RESET,
} from '../../src/constants/actionTypes';
import LinkEditor from '../../src/containers/linkEditor';

const link = {
  id: 'testID',
  title: 'testTitle',
  url: 'testUrl',
  shortLink: 'tUrl',
  clicks: 1,
  tags: ['test', 'test2'],
  description: 'myTest',
};
describe('LinkEditor container', () => {
  const initialProps = {
    linkId: 'testID',
    handelClose: () => {},
  };
  const editLinkState = {
    link: null,
    loading: false,
  };
  const fetchLinkState = {
    error: false,
    loading: false,
    data: link,
  };
  const initialState = {
    editLink: editLinkState,
    fetchLink: fetchLinkState,
  };
  const mockStore = configureStore();
  const getWrapper = (store = mockStore(initialState), props = initialProps) => mount(
    <Provider store={store}>
      <BrowserRouter>
        <LinkEditor {...props} />
      </BrowserRouter>
    </Provider>,
  );
  describe('LinkEditor container initial', () => {
    const store = mockStore(initialState);
    const wrapper = getWrapper(store);
    it('render correctly container', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
    it('action(type=FETCH_LINK_REQUESTED) dispatching', () => {
      const action = store.getActions();
      expect(action[0].type).toEqual(FETCH_LINK_REQUESTED);
    });
  });
  describe('LinkEditor isLoading', () => {
    const nextInitialState = {
      ...initialState,
      fetchLink: { ...fetchLinkState, loading: true, data: null },
    };
    const store = mockStore(nextInitialState);
    const wrapper = getWrapper(store);
    const linkEditor = wrapper.find('LinkEditor');
    it('render <Loader />', () => {
      expect(linkEditor.find('Loader')).toHaveLength(1);
    });
    it('not render <LinkForm />', () => {
      expect(linkEditor.find('LinkForm')).toHaveLength(0);
    });
    it('not render <h1 />', () => {
      expect(linkEditor.find('h1')).toHaveLength(0);
    });
  });
  describe('call handleSubmit', () => {
    it('action(type=EDIT_LINK_REQUESTED) dispatching', () => {
      const store = mockStore(initialState);
      const wrapper = getWrapper(store);
      const linkEditor = wrapper.find('LinkEditor');
      store.clearActions();
      linkEditor.instance().handleSubmit(link);
      const action = store.getActions();
      expect(action[0].type).toEqual(EDIT_LINK_REQUESTED);
    });
    it('action(type=EDIT_LINK_REQUESTED) not dispatching', () => {
      const nextInitialState = {
        ...initialState,
        fetchLink: { ...fetchLinkState, data: null },
      };
      const store = mockStore(nextInitialState);
      const wrapper = getWrapper(store);
      const linkEditor = wrapper.find('LinkEditor');
      store.clearActions();
      linkEditor.instance().handleSubmit(link);
      const action = store.getActions();
      expect(action).toHaveLength(0);
    });
  });
  describe('LinkEditor isResult or isFetchError', () => {
    const nextInitialState = {
      ...initialState,
      fetchLink: { ...fetchLinkState, error: true },
    };
    const mockHandelClose = jest.fn();
    const nextProps = {
      linkId: 'testID',
      handelClose: mockHandelClose,
    };
    const store = mockStore(nextInitialState);
    const wrapper = getWrapper(store, nextProps);
    const linkEditor = wrapper.find('LinkEditor');
    linkEditor.instance().componentDidUpdate();
    it('call handelClose', () => {
      expect(mockHandelClose).toHaveBeenCalledTimes(1);
    });
  });
  describe('LinkEditor is not Result or is not FetchError', () => {
    const mockHandelClose = jest.fn();
    const nextProps = {
      linkId: 'testID',
      handelClose: mockHandelClose,
    };
    const store = mockStore(initialState);
    const wrapper = getWrapper(store, nextProps);
    const linkEditor = wrapper.find('LinkEditor');
    linkEditor.instance().componentDidUpdate();
    it('call handelClose', () => {
      expect(mockHandelClose).toHaveBeenCalledTimes(0);
    });
  });
  describe('LinkEditor WillUnmount', () => {
    const store = mockStore(initialState);
    const wrapper = getWrapper(store);
    const linkEditor = wrapper.find('LinkEditor');
    store.clearActions();
    linkEditor.instance().componentWillUnmount();
    const action = store.getActions();
    expect(action[0].type).toEqual(EDIT_LINK_RESET);
  });
});
