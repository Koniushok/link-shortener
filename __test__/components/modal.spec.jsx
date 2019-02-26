import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Modal from '../../src/components/modal';

describe('Modal component', () => {
  const props = {
    handelClose: () => {},
  };

  describe('Modal component initial', () => {
    const modal = shallow(<Modal {...props} />);
    it('render correctly component', () => {
      expect(shallowToJson(modal)).toMatchSnapshot();
    });
  });
  describe('Modal isLoader', () => {
    const nextProps = {
      ...props,
      loading: true,
      children: <p />,
    };
    const modal = shallow(<Modal {...nextProps} />);
    it('render only children', () => {
      expect(modal.find('p')).toHaveLength(1);
    });
  });
  describe('call handelClose', () => {
    const handelClose = jest.fn();
    const nextProps = {
      ...props,
      handelClose,
    };
    const modal = mount(<Modal {...nextProps} />);
    it('call handelClose when click <ModalWrapper />', () => {
      const modalWrapper = modal.find('ModalWrapper');
      modalWrapper.simulate('click');
      expect(handelClose).toHaveBeenCalledTimes(1);
    });
  });
  describe('not call handelClose', () => {
    const handelClose = jest.fn();
    const nextProps = {
      ...props,
      handelClose,
    };
    const modal = mount(<Modal {...nextProps} />);
    it('not call handelClose when click <ModalContent />', () => {
      const modalContent = modal.find('ModalContent');
      modalContent.simulate('click');
      expect(handelClose).toHaveBeenCalledTimes(0);
    });
  });
});
