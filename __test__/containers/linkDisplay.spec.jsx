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
  const props = {
    linkId: 'testID',
    handelClose: () => {},
  };
  const mockStore = configureStore();
  describe('LinkDisplay container initial', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LinkDisplay props={props} />
        </BrowserRouter>
      </Provider>,
    );
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
    const linkDisplay = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LinkDisplay {...props} />
        </BrowserRouter>
      </Provider>,
    ).find('LinkDisplay');
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
      ...props,
      handelClose,
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LinkDisplay {...nextProps} />
        </BrowserRouter>
      </Provider>,
    );
    wrapper.setProps({ store: nextStore });
    it('call handelClose', () => {
      expect(handelClose).toHaveBeenCalledTimes(1);
    });
  });
  describe('LinkDisplay upData', () => {
    const handelClose = jest.fn();
    const store = mockStore(initialState);
    const nextProps = {
      ...props,
      handelClose,
    };
    const linkDisplay = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LinkDisplay {...nextProps} />
        </BrowserRouter>
      </Provider>,
    ).find('LinkDisplay');
    linkDisplay.instance().componentDidUpdate(linkDisplay.props(), linkDisplay.state());
    it('not call handelClose', () => {
      expect(handelClose).toHaveBeenCalledTimes(0);
    });
  });
});
