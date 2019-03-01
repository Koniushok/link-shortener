import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { CREATE_LINK_REQUESTED, CREATE_LINK_RESET } from '../../src/constants/actionTypes';
import LinkCreator from '../../src/containers/linkCreator';

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
  url: 'testURL',
  description: 'testD',
  tags: ['test'],
};

describe('LinkCreator container', () => {
  const initialState = {
    linkCreator: {
      link: null,
      loading: false,
    },
  };
  const mockStore = configureStore();
  const getWrapper = (store = mockStore(initialState)) => mount(
    <Provider store={store}>
      <LinkCreator />
    </Provider>,
  );
  describe('LinkCreator container initial', () => {
    const store = mockStore(initialState);
    const wrapper = getWrapper(store);
    it('render correctly container', () => {
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('call handleSubmit', () => {
    it('action(type=CREATE_LINK_REQUESTED) dispatching', () => {
      const store = mockStore(initialState);
      const wrapper = getWrapper(store);
      const linkCreator = wrapper.find('LinkCreator');
      store.clearActions();
      linkCreator.instance().handleSubmit(linkCreate);
      const action = store.getActions();
      expect(action[0].type).toEqual(CREATE_LINK_REQUESTED);
    });
  });
  describe('LinkCreator succeeded', () => {
    const nextInitialState = {
      linkCreator: {
        link,
        loading: false,
      },
    };
    const store = mockStore(nextInitialState);
    const wrapper = getWrapper(store);
    const linkCreator = wrapper.find('LinkCreator');
    it('render <ShortLink />', () => {
      expect(linkCreator.find('ShortLink')).toHaveLength(1);
    });
  });
  describe('LinkCreator WillUnmount', () => {
    const store = mockStore(initialState);
    const wrapper = getWrapper(store);
    const linkCreator = wrapper.find('LinkCreator');
    store.clearActions();
    linkCreator.instance().componentWillUnmount();
    const action = store.getActions();
    expect(action[0].type).toEqual(CREATE_LINK_RESET);
  });
});
