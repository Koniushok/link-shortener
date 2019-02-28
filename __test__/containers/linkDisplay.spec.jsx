import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { FETCH_LINK_REQUESTED } from '../../src/constants/actionTypes';
import LinkDisplay from '../../src/containers/linkDisplay';

describe('LinkDisplay container', () => {
  const link = {
    id: 'testID',
    title: 'testTitle',
    url: 'testUrl',
    shortLink: 'tUrl',
    clicks: 1,
    tags: ['test', 'test2'],
    description: 'myTest',
  };
  const initialState = {
    fetchLink: {
      data: link,
      loading: false,
      error: false,
    },
  };
  const initialProps = {
    linkId: 'testID',
    handelClose: () => {},
  };
  const mockStore = configureStore();
  const getWrapper = (store = mockStore(initialState), props = initialProps) => mount(
    <Provider store={store}>
      <BrowserRouter>
        <LinkDisplay {...props} />
      </BrowserRouter>
    </Provider>,
  );
  describe('LinkDisplay container initial', () => {
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
  describe('LinkDisplay isLoading', () => {
    const nextInitialState = {
      fetchLink: { loading: true, data: link },
    };
    const store = mockStore(nextInitialState);
    const linkDisplay = getWrapper(store).find('LinkDisplay');
    it('render <Loader />', () => {
      expect(linkDisplay.find('Loader')).toHaveLength(1);
    });
    it('not render <InfoLink />', () => {
      expect(linkDisplay.find('InfoLink')).toHaveLength(0);
    });
  });
  describe('LinkDisplay isError', () => {
    const handelClose = jest.fn();
    const store = mockStore(initialState);
    const nextInitialState = {
      fetchLink: { loading: false, data: link, error: true },
    };
    const nextStore = mockStore(nextInitialState);
    const nextProps = {
      ...initialState,
      handelClose,
    };
    const wrapper = getWrapper(store, nextProps);
    wrapper.setProps({ store: nextStore });
    it('call handelClose', () => {
      expect(handelClose).toHaveBeenCalledTimes(1);
    });
  });
  describe('LinkDisplay upData', () => {
    const handelClose = jest.fn();
    const nextProps = {
      ...initialState,
      handelClose,
    };
    const linkDisplay = getWrapper(undefined, nextProps).find('LinkDisplay');
    linkDisplay.instance().componentDidUpdate(linkDisplay.props(), linkDisplay.state());
    it('not call handelClose', () => {
      expect(handelClose).toHaveBeenCalledTimes(0);
    });
  });
});
