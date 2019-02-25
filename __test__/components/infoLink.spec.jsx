import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import InfoLink from '../../src/components/infoLink';

describe('InfoLink component', () => {
  const link = {
    id: 'testID',
    title: 'testTitle',
    url: 'testUrl',
    shortLink: 'tUrl',
    clicks: 1,
    tags: ['test', 'test2'],
    description: 'myTest',
  };
  const props = {
    handelEditClick: () => {},
    handelDeleteClick: () => {},
    link,
  };

  describe('InfoLink component initial', () => {
    it('render correctly component', () => {
      const output = shallow(<InfoLink {...props} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });

  describe('InfoLink component render control buttons', () => {
    const infoLink = shallow(<InfoLink {...props} />);
    it('render <Delete>', () => {
      expect(infoLink.find('Delete')).toHaveLength(1);
    });

    it('renders <Edit>', () => {
      expect(infoLink.find('Edit')).toHaveLength(1);
    });
  });

  describe('InfoLink  component dont render control buttons', () => {
    const infoLink = shallow(<InfoLink link={link} />);
    it('Call handelEdit and handelDelete', () => {
      expect(() => {
        infoLink.instance().handelEditClick();
      }).not.toThrow();
      expect(() => {
        infoLink.instance().handelDeleteClick();
      }).not.toThrow();
    });
    it('not render <Delete>', () => {
      expect(infoLink.find('Delete')).toHaveLength(0);
    });

    it('not renders <Edit>', () => {
      expect(infoLink.find('Edit')).toHaveLength(0);
    });
  });

  describe('Call function when clicking control buttons', () => {
    const handelEditClick = jest.fn();
    const handelDeleteClick = jest.fn();
    const nextProps = {
      handelEditClick,
      handelDeleteClick,
      link,
    };
    const infoLink = shallow(<InfoLink {...nextProps} />);
    it('Should call handelDeleteClick function when clicking delete button', () => {
      const deleteButton = infoLink.find('Delete');
      deleteButton.simulate('click');
      expect(handelDeleteClick).toHaveBeenCalledTimes(1);
    });

    it('Should call handelEditClick function when clicking edit button', () => {
      const editButton = infoLink.find('Edit');
      editButton.simulate('click');
      expect(handelEditClick).toHaveBeenCalledTimes(1);
    });
  });
});
