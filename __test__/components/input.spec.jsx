import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import Input, { LabelError } from '../../src/components/input';

describe('Input component', () => {
  const props = {
    defaultValue: 'default',
    onChange: () => undefined,
    name: 'testName',
    type: 'password',
    label: 'testLabel',
    error: 'testError',
  };

  describe('Input component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<Input {...props} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });

  describe('Input component render <LabelError>', () => {
    it('render error', () => {
      const input = mount(<Input {...props} />);
      expect(input.find(LabelError)).toHaveLength(1);
    });
    it('not render error', () => {
      const input = mount(<Input name="test" label="label" />);
      expect(input.find(LabelError)).toHaveLength(0);
    });
  });
});
