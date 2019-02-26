import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LinkDisplay from '../../src/containers/linkDisplay/linkDisplay';

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
  const fetchLink = jest.fn();
  const props = {
    error: false,
    handelClose: () => {},
    linkId: 'testId',
    link,
    loading: false,
    fetchLink,
  };

  describe('LinkDisplay container initial', () => {
    const linkDisplay = shallow(<LinkDisplay {...props} />);
    it('render correctly container', () => {
      expect(shallowToJson(linkDisplay)).toMatchSnapshot();
    });
    it('Call fetchLink method', () => {
      expect(fetchLink).toHaveBeenCalledTimes(1);
    });
  });
  describe('LinkDisplay isLoading', () => {
    const nextProps = {
      ...props,
      loading: true,
    };
    it('render <Loader />', () => {
      const linkDisplay = shallow(<LinkDisplay {...nextProps} />);
      expect(linkDisplay.find('Loader')).toHaveLength(1);
    });
    it('not render <InfoLink />', () => {
      const linkDisplay = shallow(<LinkDisplay {...nextProps} />);
      expect(linkDisplay.find('InfoLink')).toHaveLength(0);
    });
  });
  describe('LinkDisplay isError', () => {
    it('call handelClose', () => {
      const handelClose = jest.fn();
      const nextProps = {
        ...props,
        handelClose,
      };
      const linkDisplay = shallow(<LinkDisplay {...nextProps} />);
      linkDisplay.setProps({ error: true });
      expect(handelClose).toHaveBeenCalledTimes(1);
    });
  });
  it('not call handelClose if LinkDisplay is not error', () => {
    const handelClose = jest.fn();
    const nextProps = {
      ...props,
      handelClose,
    };
    const linkDisplay = shallow(<LinkDisplay {...nextProps} />);
    linkDisplay.setProps();
    expect(handelClose).toHaveBeenCalledTimes(0);
  });
});
