import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ShortLink from '../../src/components/shortLink';

describe('InfoLink component', () => {
  const props = {
    link: 'testUrl',
  };

  describe('ShortLink component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<ShortLink {...props} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
});
