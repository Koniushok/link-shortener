import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from '../../src/components/button';
import 'jest-styled-components';

describe('Button styled component', () => {
  describe('Button component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<Button />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
  describe('Button component render margin', () => {
    it('render alignRight margin', () => {
      const button = mount(<Button alignRight />);
      expect(button).toHaveStyleRule('margin', '0 0 0 auto');
    });
    it('render alignLeft margin', () => {
      const button = mount(<Button alignLeft />);
      expect(button).toHaveStyleRule('margin', '0 auto 0 0');
    });
    it('render alignCenter margin', () => {
      const button = mount(<Button alignCenter />);
      expect(button).toHaveStyleRule('margin', '0 auto');
    });
    it('render default margin', () => {
      const button = mount(<Button />);
      expect(button).toHaveStyleRule('margin', '0');
    });
  });
});
