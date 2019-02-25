import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Tags, { Tag } from '../../src/components/tags';

describe('Tags component', () => {
  const props = {
    tagList: ['tag1', 'tag2'],
    handleDelete: () => undefined,
  };

  describe('Tags component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<Tags {...props} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });
  describe('Render <Tag /> in Tags component', () => {
    const nextProps = {
      tagList: [],
      handleDelete: () => undefined,
    };
    const tags = shallow(<Tags {...nextProps} />);
    it('not render <Tag />', () => {
      expect(tags.find('Tag')).toHaveLength(0);
    });
  });
});

describe('Tag component', () => {
  const props = {
    tag: 'tag1',
    handleDelete: () => undefined,
  };

  describe('Tag component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<Tag {...props} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });

  describe('Render delete button in Tag component', () => {
    const nextProps = {
      tagList: ['tag1', 'tag2'],
    };
    it('Not render <XCircle>(button delete)', () => {
      const tag = shallow(<Tag {...nextProps} />);
      expect(tag.find('XCircle')).toHaveLength(0);
    });
    it('Render <XCircle>(button delete)', () => {
      const tag = shallow(<Tag {...nextProps} handleDelete={() => undefined} />);
      expect(tag.find('XCircle')).toHaveLength(1);
    });
  });

  describe('Call handleDelete', () => {
    const handleDelete = jest.fn();
    const nextProps = {
      tag: 'tag1',
      handleDelete,
    };

    it('Should call handleDelete function when not render <XCircle>(button delete)', () => {
      const tag = shallow(<Tag tag="tag1" />);
      expect(() => {
        tag.instance().handleDeleteClick({ stopPropagation: () => {} });
      }).not.toThrow();
    });

    it('Should call handleDelete function when clicking delete button', () => {
      const tag = shallow(<Tag {...nextProps} />);
      const deleteButton = tag.find('XCircle');
      deleteButton.simulate('click', { stopPropagation: () => undefined });
      expect(handleDelete).toHaveBeenCalledTimes(1);
    });
  });
});
