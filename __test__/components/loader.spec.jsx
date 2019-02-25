import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Loader from '../../src/components/loader';

describe('Loader component', () => {
  describe('Loader component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<Loader />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
});
